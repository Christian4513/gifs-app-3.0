/**
 * Respuesta de la API de Giphy que contiene datos de GIFs, información de estado y paginación.
 */
export interface GiphyResponse {
  /** Lista de elementos GIF obtenidos. */
  data:       GiphyItem[];
  /** Información de estado de la respuesta. */
  meta:       Meta;
  /** Información sobre la paginación de resultados. */
  pagination: Pagination;
}

/**
 * Representación de un GIF dentro de la API de Giphy.
 */
export interface GiphyItem {
  /** Tipo de elemento, normalmente 'gif'. */
  type:                     Type;
  /** Identificador único del GIF. */
  id:                       string;
  /** URL del GIF en la API de Giphy. */
  url:                      string;
  /** Identificador amigable utilizado en la API. */
  slug:                     string;
  /** URLs cortas proporcionadas por Giphy. */
  bitlyGIFURL:              string;
  bitlyURL:                 string;
  embedURL:                 string;
  /** Nombre de usuario del creador del GIF. */
  username:                 string;
  /** Fuente original del GIF. */
  source:                   string;
  /** Título del GIF. */
  title:                    string;
  /** Clasificación del contenido (Ej. 'G'). */
  rating:                   Rating;
  /** URL del contenido si está disponible. */
  contentURL:               string;
  /** Dominio de la fuente. */
  sourceTLD:                string;
  sourcePostURL:            string;
  /** Indica si el GIF es un sticker. */
  isSticker:                number;
  /** Fecha de importación del GIF. */
  importDatetime:           Date;
  /** Fecha en que el GIF comenzó a ser tendencia. */
  trendingDatetime:         Date | TrendingDatetimeEnum;
  /** Diferentes formatos y tamaños del GIF. */
  images:                   Images;
  /** Datos analíticos de interacción. */
  analyticsResponsePayload: string;
  analytics:                Analytics;
  /** Texto alternativo del GIF. */
  altText:                  string;
  /** Información del usuario, si está disponible. */
  user?:                    User;
}

/**
 * Información analítica relacionada con interacciones de usuario en Giphy.
 */
export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
}

/** Representa un enlace analítico para eventos específicos. */
export interface Onclick {
  url: string;
}

/**
 * Representación de las imágenes de un GIF en distintos formatos.
 */
export interface Images {
  original:               FixedHeight;
  downsized:              The480_WStill;
  downsizedLarge:         The480_WStill;
  downsizedMedium:        The480_WStill;
  downsizedSmall:         DownsizedSmall;
  downsizedStill:         The480_WStill;
  fixedHeight:            FixedHeight;
  fixedHeightDownsampled: FixedHeight;
  fixedHeightSmall:       FixedHeight;
  fixedHeightSmallStill:  The480_WStill;
  fixedHeightStill:       The480_WStill;
  fixedWidth:             FixedHeight;
  fixedWidthDownsampled:  FixedHeight;
  fixedWidthSmall:        FixedHeight;
  fixedWidthSmallStill:   The480_WStill;
  fixedWidthStill:        The480_WStill;
  looping:                Looping;
  originalStill:          The480_WStill;
  originalMp4:            DownsizedSmall;
  preview:                DownsizedSmall;
  previewGIF:             The480_WStill;
  previewWebp:            The480_WStill;
  the480WStill:           The480_WStill;
  hd?:                    DownsizedSmall;
}

/** Representa un GIF en resolución fija. */
export interface FixedHeight {
  height:   string;
  width:    string;
  size:     string;
  url:      string;
  mp4Size?: string;
  mp4?:     string;
  webpSize: string;
  webp:     string;
  frames?:  string;
  hash?:    string;
}

/** Representa un GIF en formato reducido. */
export interface DownsizedSmall {
  height:  string;
  width:   string;
  mp4Size: string;
  mp4:     string;
}

/** Representa un GIF en formato estático o de vista previa. */
export interface The480_WStill {
  height: string;
  width:  string;
  size:   string;
  url:    string;
}

/** Representa un GIF con reproducción en bucle. */
export interface Looping {
  mp4Size: string;
  mp4:     string;
}

/** Clasificación del GIF según su contenido. */
export enum Rating {
  G = "g",
}

/** Fecha de tendencia cuando el GIF no ha sido identificado como viral. */
export enum TrendingDatetimeEnum {
  The00000000000000 = "0000-00-00 00:00:00",
}

/** Tipos de elementos en Giphy. */
export enum Type {
  GIF = "gif",
}

/**
 * Información del usuario que subió el GIF.
 */
export interface User {
  avatarURL:    string;
  bannerImage:  string;
  bannerURL:    string;
  profileURL:   string;
  username:     string;
  displayName:  string;
  description:  string;
  instagramURL: string;
  websiteURL:   string;
  isVerified:   boolean;
}

/**
 * Metadatos asociados a la respuesta de la API.
 */
export interface Meta {
  status:     number;
  msg:        string;
  responseID: string;
}

/**
 * Información de paginación en la API de Giphy.
 */
export interface Pagination {
  totalCount: number;
  count:      number;
  offset:     number;
}
