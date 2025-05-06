import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

/**
 * @constant {string} GIF_KEY
 * @description Clave utilizada para almacenar y recuperar los GIFs del historial en el `localStorage`.
 */
const GIF_KEY = 'gifs';

/**
 * Carga los GIFs desde el almacenamiento local.
 *
 * @returns {Record<string, Gif[]>} GIFs almacenados en localStorage.
 */
const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}

/**
 * Servicio para gestionar los GIFs mediante la API de Giphy y el almacenamiento local.
 * Se encarga de cargar tendencias, buscar GIFs y mantener historial.
 */
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  /**
   * Cliente HTTP para realizar solicitudes a la API.
   */
  private http = inject(HttpClient);

  /**
   * Estado reactivo que almacena los GIFs de tendencias.
   */
  trendingGifs = signal<Gif[]>([]);

  /**
   * Indica si la carga de GIFs de tendencias está en proceso.
   */
  trendingGifsLoading = signal(false);

  /**
   * Página actual en la carga de tendencias.
   */
  private trendingPage = signal(0);

  /**
   * Agrupa los GIFs de tendencias en arreglos de tres elementos.
   *
   * @returns {Gif[][]} Listado de GIFs agrupados.
   */
  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for(let i = 0; i < this.trendingGifs().length; i += 3){
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  });

  /**
   * Historial de búsquedas de GIFs almacenado localmente.
   */
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());

  /**
   * Llaves del historial de búsqueda.
   *
   * @returns {string[]} Lista de términos buscados.
   */
  serachHistoryKeys = computed(() => Object.keys(this.searchHistory()))

  /**
   * Constructor del servicio.
   * Llama automáticamente a la función para cargar GIFs de tendencias al iniciar.
   */
  constructor() {
    this.loadTrendingGifs();
  }

  /**
   * Efecto que guarda automáticamente los GIFs del historial en el localStorage
   * cada vez que hay cambios en `searchHistory`.
   */
  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });

  /**
   * Carga los GIFs de tendencias desde la API de Giphy.
   * Si ya hay una carga en proceso, se detiene.
   */
  loadTrendingGifs(): void {
    if( this.trendingGifsLoading() ) return;

    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: this.trendingPage() * 20,
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.update(currentGifs => [
        ...currentGifs,
        ...gifs
      ]);
      this.trendingPage.update(current => current + 1);
      this.trendingGifsLoading.set(false);
    })
  }

  /**
   * Realiza una búsqueda de GIFs en la API de Giphy.
   *
   * @param {string} query - Término de búsqueda.
   * @returns {Observable<Gif[]>} Flujo de datos con los GIFs obtenidos.
   */
  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: 50,
      }
    }).pipe(
      map(({ data }) => data),
      map(items => GifMapper.mapGiphyItemsToGifArray(items)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLowerCase()]: items,
        }))
      })
    );
  }

  /**
   * Obtiene los GIFs almacenados en el historial de búsqueda.
   *
   * @param {string} query - Término de búsqueda.
   * @returns {Gif[]} Lista de GIFs encontrados en el historial.
   */
  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
