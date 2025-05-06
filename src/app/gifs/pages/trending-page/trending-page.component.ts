import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

/**
 * Componente que muestra los GIFs de tendencias.
 *
 * Administra el scroll y la carga de nuevos GIFs cuando el usuario llega al final de la lista.
 */
@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export class TrendingPageComponent implements AfterViewInit {

  /**
   * Servicio que gestiona los GIFs de tendencias.
   *
   * Se inyecta automáticamente mediante `inject`.
   */
  gifService = inject(GifsService);

  /**
   * Servicio que gestiona y guarda el estado del scroll.
   *
   * Se inyecta automáticamente mediante `inject`.
   */
  scrollStateService = inject(ScrollStateService);

  /**
   * Referencia al contenedor del grupo de GIFs.
   *
   * Usado para manejar eventos de scroll manualmente.
   */
  @ViewChild('groupDiv') scrollDivRef!: ElementRef<HTMLDivElement>;

  /**
   * Ciclo de vida que se ejecuta después de inicializar la vista del componente.
   *
   * Restaura la posición del scroll desde el servicio `ScrollStateService`.
   */
  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendigScrollState();
  }

  /**
   * Evento que se dispara al hacer scroll dentro del contenedor.
   *
   * Guarda la posición del scroll y carga más GIFs si el usuario se aproxima al final.
   *
   * @param {Event} event - Evento de scroll emitido por el contenedor.
   */
  onScroll(event: Event): void {
    const scrollDiv = this.scrollDivRef?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    console.log({ scrollDiv, clientHeight, scrollHeight });

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    // Guarda la posición del scroll en el servicio
    this.scrollStateService.trendigScrollState.set(scrollTop);

    // Si el usuario llega al final, carga más GIFs
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
