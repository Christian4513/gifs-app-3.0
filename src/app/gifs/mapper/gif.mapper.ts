import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

/**
 * Clase de utilidad para mapear objetos de la API de Giphy a la estructura interna de GIFs.
 */
export class GifMapper {

  /**
   * Convierte un objeto `GiphyItem` en un objeto `Gif`.
   *
   * @param {GiphyItem} item - Objeto proveniente de la API de Giphy.
   * @returns {Gif} Objeto transformado con la estructura interna de GIFs.
   */
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  /**
   * Convierte un arreglo de `GiphyItem` en un arreglo de `Gif`.
   *
   * @param {GiphyItem[]} items - Lista de elementos provenientes de la API de Giphy.
   * @returns {Gif[]} Lista de objetos GIF con la estructura interna.
   */
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
