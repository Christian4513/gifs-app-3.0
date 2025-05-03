import { Injectable, signal } from '@angular/core';

/**
 * Servicio para gestionar el estado del scroll en una sección específica.
 *
 * @Injectable se utiliza para hacer que este servicio esté disponible en la raíz de la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {

  /**
   * Estado del scroll para la sección de tendencias.
   * Utiliza `signal(0)` para inicializarlo con un valor de 0.
   *
   * @type {Signal<number>}
   */
  trendigScrollState = signal(0);
}

