import { GifsService } from './../../../services/gifs.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Representa una opción del menú lateral de navegación.
 */
interface MenuOption {
  /**
   * Clase del icono de FontAwesome que representa la opción.
   */
  icon: string;

  /**
   * Etiqueta visible del botón en el menú.
   */
  label: string;

  /**
   * Ruta de navegación asociada a la opción.
   */
  route: string;

  /**
   * Descripción breve de la opción.
   */
  sublabel: string;
}

/**
 * Componente que gestiona las opciones del menú lateral de navegación.
 *
 * Este componente proporciona enlaces a las distintas secciones de la aplicación, como las tendencias
 * y la búsqueda de GIFs. Cada opción del menú tiene un icono, una etiqueta, una ruta de navegación
 * y una descripción breve.
 */
@Component({
  selector: 'gif-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {

  /** Servicio para manejar la lógica de GIFs. */
  gifService = inject(GifsService);

  /** Opciones del menú lateral. */
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      sublabel: 'Gifs Populares'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      route: '/dashboard/search',
      sublabel: 'Buscar Gifs'
    }
  ];
}

