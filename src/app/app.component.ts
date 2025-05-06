import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * @description
 * Componente raíz de la aplicación. Es el punto de entrada principal donde se carga
 * el enrutador y se inicia la estructura de la aplicación.
 *
 * Contiene el `<router-outlet>` que renderiza los componentes de las rutas hijas.
 *
 * @component
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
   * Título de la aplicación, utilizado para mostrar o identificar la app.
   */
  title = 'gifs-app';
}
