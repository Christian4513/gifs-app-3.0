/**
 * @interface GiphyResponse
 * @description Respuesta de la API de Giphy que contiene datos de GIFs, información de estado y paginación.
 */
export interface GiphyResponse {
  /**
   * Lista de elementos GIF obtenidos.
   */
  data: GiphyItem[];

  /**
   * Información de estado de la respuesta.
   */
  meta: Meta;

  /**
   * Información sobre la paginación de resultados.
   */
  pagination: Pagination;
}

/**
 * @interface GiphyItem
 * @description Representación de un GIF dentro de la API de Giphy.
 */
export interface GiphyItem {
  /** Tipo de elemento, normalmente 'gif'. */
  type: Type;

  /** Identificador único del GIF. */
  id: string;

  /** URL del GIF en la API de Giphy. */
  url: string;

  /** Identificador amigable utilizado en la API. */
  slug: string;

  /** URLs cortas proporcionadas por Giphy. */
  bitlyGIFURL: string;

  /** URL corta alternativa. */
  bitlyURL: string;

  /** URL para embeber el GIF. */
  embedURL: string;

  /** Nombre de usuario del creador del GIF. */
  username: string;

  /** Fuente original del GIF. */
  source: string;

  /** Título del GIF. */
  title: string;

  /** Clasificación del contenido (Ej. 'G'). */
  rating: Rating;

  /** URL del contenido si está disponible. */
  contentURL: string;

  /** Dominio de la fuente. */
  sourceTLD: string;

  /** URL del post original. */
  sourcePostURL: string;

  /** Indica si el GIF es un sticker. */
  isSticker: number;

  /** Fecha de importación del GIF. */
  importDatetime: Date;

  /** Fecha en que el GIF comenzó a ser tendencia. */
  trendingDatetime: Date | TrendingDatetimeEnum;

  /** Diferentes formatos y tamaños del GIF. */
  images: Images;

  /** Datos analíticos de interacción. */
  analyticsResponsePayload: string;

  /** Datos analíticos de eventos. */
  analytics: Analytics;

  /** Texto alternativo del GIF. */
  altText: string;

  /** Información del usuario, si está disponible. */
  user?: User;
}

/**
 * @interface Analytics
 * @description Información analítica relacionada con interacciones de usuario en Giphy.
 */
export interface Analytics {
  /** Evento de carga del GIF. */
  onload: Onclick;

  /** Evento de clic sobre el GIF. */
  onclick: Onclick;

  /** Evento de envío del GIF. */
  onsent: Onclick;
}

/**
 * @interface Onclick
 * @description Representa un enlace analítico para eventos específicos.
 */
export interface Onclick {
  /** URL del evento analítico. */
  url: string;
}

/**
 * @interface Images
 * @description Representación de las imágenes de un GIF en distintos formatos.
 */
export interface Images {
  /** Imagen en resolución original. */
  original: FixedHeight;

  /** Imagen reducida. */
  downsized: The480_WStill;

  /** Imagen grande reducida. */
  downsizedLarge: The480_WStill;

  /** Imagen media reducida. */
  downsizedMedium: The480_WStill;

  /** Versión pequeña en MP4. */
  downsizedSmall: DownsizedSmall;

  /** Imagen reducida y estática. */
  downsizedStill: The480_WStill;

  /** Altura fija. */
  fixedHeight: FixedHeight;

  /** Altura fija con muestreo. */
  fixedHeightDownsampled: FixedHeight;

  /** Altura fija en tamaño pequeño. */
  fixedHeightSmall: FixedHeight;

  /** Altura fija pequeña y estática. */
  fixedHeightSmallStill: The480_WStill;

  /** Altura fija estática. */
  fixedHeightStill: The480_WStill;

  /** Ancho fijo. */
  fixedWidth: FixedHeight;

  /** Ancho fijo con muestreo. */
  fixedWidthDownsampled: FixedHeight;

  /** Ancho fijo en tamaño pequeño. */
  fixedWidthSmall: FixedHeight;

  /** Ancho fijo pequeño y estático. */
  fixedWidthSmallStill: The480_WStill;

  /** Ancho fijo estático. */
  fixedWidthStill: The480_WStill;

  /** Versión en bucle. */
  looping: Looping;

  /** Imagen estática original. */
  originalStill: The480_WStill;

  /** Versión MP4 original. */
  originalMp4: DownsizedSmall;

  /** Vista previa. */
  preview: DownsizedSmall;

  /** Vista previa en formato GIF. */
  previewGIF: The480_WStill;

  /** Vista previa en formato WebP. */
  previewWebp: The480_WStill;

  /** Imagen en resolución 480W. */
  the480WStill: The480_WStill;

  /** Versión HD del GIF. */
  hd?: DownsizedSmall;
}

/**
 * @interface FixedHeight
 * @description Representa un GIF en resolución fija.
 */
export interface FixedHeight {
  /** Altura de la imagen. */
  height: string;

  /** Ancho de la imagen. */
  width: string;

  /** Tamaño en bytes del archivo. */
  size: string;

  /** URL de la imagen. */
  url: string;

  /** Tamaño del MP4 en bytes (opcional). */
  mp4Size?: string;

  /** URL del MP4 (opcional). */
  mp4?: string;

  /** Tamaño en WebP. */
  webpSize: string;

  /** URL del WebP. */
  webp: string;

  /** Cantidad de cuadros del GIF (opcional). */
  frames?: string;

  /** Hash del GIF (opcional). */
  hash?: string;
}

/**
 * @interface DownsizedSmall
 * @description Representa un GIF en formato reducido.
 */
export interface DownsizedSmall {
  /** Altura de la imagen. */
  height: string;

  /** Ancho de la imagen. */
  width: string;

  /** Tamaño del MP4. */
  mp4Size: string;

  /** URL del MP4. */
  mp4: string;
}

/**
 * @interface The480_WStill
 * @description Representa un GIF en formato estático o de vista previa.
 */
export interface The480_WStill {
  /** Altura de la imagen. */
  height: string;

  /** Ancho de la imagen. */
  width: string;

  /** Tamaño en bytes. */
  size: string;

  /** URL de la imagen. */
  url: string;
}

/**
 * @interface Looping
 * @description Representa un GIF con reproducción en bucle.
 */
export interface Looping {
  /** Tamaño del archivo MP4. */
  mp4Size: string;

  /** URL del archivo MP4. */
  mp4: string;
}

/**
 * @enum Rating
 * @description Clasificación del GIF según su contenido.
 */
export enum Rating {
  /** Clasificación general. */
  G = "g",
}

/**
 * @enum TrendingDatetimeEnum
 * @description Fecha de tendencia cuando el GIF no ha sido identificado como viral.
 */
export enum TrendingDatetimeEnum {
  /** Valor por defecto cuando no hay tendencia. */
  The00000000000000 = "0000-00-00 00:00:00",
}

/**
 * @enum Type
 * @description Tipos de elementos en Giphy.
 */
export enum Type {
  /** Elemento de tipo GIF. */
  GIF = "gif",
}

/**
 * @interface User
 * @description Información del usuario que subió el GIF.
 */
export interface User {
  /** URL del avatar del usuario. */
  avatarURL: string;

  /** Imagen de banner del perfil. */
  bannerImage: string;

  /** URL del banner del usuario. */
  bannerURL: string;

  /** URL del perfil del usuario. */
  profileURL: string;

  /** Nombre de usuario. */
  username: string;

  /** Nombre visible o de presentación del usuario. */
  displayName: string;

  /** Descripción del perfil. */
  description: string;

  /** URL del perfil de Instagram del usuario. */
  instagramURL: string;

  /** Sitio web personal del usuario. */
  websiteURL: string;

  /** Indica si el usuario está verificado. */
  isVerified: boolean;
}

/**
 * @interface Meta
 * @description Metadatos asociados a la respuesta de la API.
 */
export interface Meta {
  /** Código de estado HTTP. */
  status: number;

  /** Mensaje relacionado con el estado. */
  msg: string;

  /** ID único de la respuesta. */
  responseID: string;
}

/**
 * @interface Pagination
 * @description Información de paginación en la API de Giphy.
 */
export interface Pagination {
  /** Cantidad total de resultados disponibles. */
  totalCount: number;

  /** Cantidad de resultados devueltos en esta respuesta. */
  count: number;

  /** Desplazamiento de los resultados, útil para paginación. */
  offset: number;
}

