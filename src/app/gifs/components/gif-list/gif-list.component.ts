import { Component, input } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { Gif } from '../../interfaces/gif.interface';

/**
 * Componente que muestra una lista de GIFs.
 *
 * Utiliza `GifListItemComponent` para renderizar cada elemento de la lista.
 */
@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {

  /**
   * Lista de GIFs a mostrar en el componente.
   *
   * @type {Gif[]}
   */
  gifs = input.required<Gif[]>();

}
