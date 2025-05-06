import { Component, input } from '@angular/core';

/**
 * Componente que representa un elemento individual dentro de una lista de GIFs.
 * Este componente se encarga de mostrar un único GIF usando la URL proporcionada.
 */
@Component({
  selector: 'gif-list-item',  
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css'
})
export class GifListItemComponent {

  /**
   * URL de la imagen del GIF.
   * Esta propiedad es recibida como un valor de entrada desde un componente padre.
   *
   * @type {string}
   * @input
   */
  imageUrl = input.required<string>();  // Propiedad de entrada (input) que recibe la URL del GIF como una cadena de texto
}
