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

  /** Servicio para realizar búsquedas de GIFs. */
  gifService = inject(GifsService);

  /** Estado reactivo que almacena los resultados de búsqueda. */
  gifs = signal<Gif[]>([]);

  /**
   * Realiza una búsqueda de GIFs en la API y actualiza el estado de `gifs`.
   *
   * @param {string} query - Término de búsqueda ingresado por el usuario.
   */
  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
