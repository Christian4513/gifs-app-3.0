import { Component, input } from '@angular/core';

/**
 * Componente que representa un elemento individual dentro de una lista de GIFs.
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
   *
   * @type {string}
   */
  imageUrl = input.required<string>();
}
