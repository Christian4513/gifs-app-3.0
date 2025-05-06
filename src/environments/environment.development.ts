/**
 * Entorno de configuración para la aplicación en modo producción.
 *
 * @property production Indica si la aplicación está en modo producción.
 * @property companyName Nombre principal de la empresa o aplicación.
 * @property companyName2 Segundo nombre complementario.
 * @property companySlogan Lema o eslogan de la aplicación.
 * @property giphyApiKey Clave de acceso para consumir la API de Giphy.
 * @property giphyUrl URL base para acceder a los endpoints de la API de Giphy.
 */
export const environment = {
  /** Indica si la aplicación está en modo producción */
  production: true,

  /** Nombre principal de la empresa o app */
  companyName: 'Gifs',

  /** Segundo nombre complementario */
  companyName2: 'App',

  /** Lema o eslogan de la aplicación */
  companySlogan: 'maneja tus gifs',

  // === API Keys ===

  /** Clave de acceso para la API de Giphy */
  giphyApiKey: 'arqC855dIidnPuja9lbUSWSnFiMk3P8E',

  /** URL base de la API de Giphy */
  giphyUrl: 'https://api.giphy.com/v1',
}
