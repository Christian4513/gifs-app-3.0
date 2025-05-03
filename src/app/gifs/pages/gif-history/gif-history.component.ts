import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

/**
 * Componente que muestra el historial de búsquedas de GIFs.
 *
 * Obtiene el término de búsqueda desde la URL y recupera los GIFs asociados desde el historial.
 */
@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  styleUrl: './gif-history.component.css'
})
export class GifHistoryComponent {

  /** Servicio para acceder al historial de GIFs. */
  gifService = inject(GifsService);

  /**
   * Obtiene el parámetro `query` de la URL como un **signal** reactivo.
   *
   * @type {Signal<string>}
   */
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  /**
   * Recupera los GIFs asociados al término de búsqueda almacenado en el historial.
   *
   * @returns {Gif[]} Lista de GIFs guardados en el historial de búsqueda.
   */
  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });

}


