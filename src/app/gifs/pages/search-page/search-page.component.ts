import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

/**
 * Componente que permite realizar búsquedas de GIFs en la API de Giphy.
 *
 * Se encarga de gestionar la búsqueda y mostrar los resultados mediante `GifListComponent`.
 */
@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  /**
   * Servicio inyectado que permite buscar GIFs en la API de Giphy.
   */
  gifService = inject(GifsService);

  /**
   * Señal reactiva que almacena la lista de resultados de búsqueda de GIFs.
   */
  gifs = signal<Gif[]>([]);

  /**
   * Ejecuta una búsqueda de GIFs en la API de Giphy usando el término proporcionado
   * y actualiza el estado local con los resultados obtenidos.
   *
   * @param {string} query - Término de búsqueda ingresado por el usuario.
   */
  onSearch(query: string): void {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
