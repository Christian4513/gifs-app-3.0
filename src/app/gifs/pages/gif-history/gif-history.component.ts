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

  /**
   * Servicio que permite acceder al historial de búsquedas de GIFs.
   */
  gifService = inject(GifsService);

  /**
   * Signal que representa el término de búsqueda obtenido dinámicamente desde los parámetros de la URL.
   *
   * @type {Signal<string>}
   */
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  /**
   * Computed signal que devuelve la lista de GIFs correspondiente al término
   * de búsqueda recuperado del historial.
   *
   * @type {Signal<Gif[]>}
   */
  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });

}



