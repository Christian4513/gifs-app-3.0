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

   /** Servicio para gestionar los GIFs de tendencias. */
   gifService = inject(GifsService);

   /** Servicio para almacenar el estado del scroll. */
   scrollStateService = inject(ScrollStateService);

   /** Referencia al contenedor de los GIFs en el DOM. */
   @ViewChild('groupDiv') scrollDivRef!: ElementRef<HTMLDivElement>;

   /**
    * Ajusta la posición del scroll al estado guardado al inicializar la vista.
    */
   ngAfterViewInit(): void {
     const scrollDiv = this.scrollDivRef?.nativeElement;
     if (!scrollDiv) return;

     scrollDiv.scrollTop = this.scrollStateService.trendigScrollState();
   }

   /**
    * Maneja el evento de scroll y actualiza el estado del scroll.
    *
    * @param {Event} event - Evento de desplazamiento.
    */
   onScroll(event: Event) {
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
