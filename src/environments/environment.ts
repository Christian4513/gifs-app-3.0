/**
 * Configuración del entorno de la aplicación para producción.
 *
 * @property production Indica si la app se ejecuta en entorno de producción.
 * @property companyName Nombre principal de la empresa o aplicación.
 * @property companyName2 Segundo nombre o complemento del nombre.
 * @property companySlogan Lema o frase distintiva de la aplicación.
 * @property giphyApiKey Clave de autenticación para la API de Giphy.
 * @property giphyUrl URL base para acceder a los servicios de Giphy.
 */
export const environment = {
  /** Indica si la aplicación está en modo producción (true) o desarrollo (false) */
  production: true,

  /** Nombre principal de la empresa o aplicación */
  companyName: 'Gifs',

  /** Segundo nombre o parte complementaria del nombre */
  companyName2: 'App',

  /** Lema o frase de presentación de la aplicación */
  companySlogan: 'maneja tus gifs',

  /** Clave de autenticación para usar la API de Giphy */
  giphyApiKey: 'arqC855dIidnPuja9lbUSWSnFiMk3P8E',

  /** URL base para acceder a los servicios de la API de Giphy */
  giphyUrl: 'https://api.giphy.com/v1',
};
