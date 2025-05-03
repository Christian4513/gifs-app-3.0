import { Routes } from '@angular/router';

/**
 * Configuración de rutas de la aplicación utilizando carga peresoza (Lazy Load).
 */
export const routes: Routes = [

  /** Ruta principal: `dashboard` con carga peresoza. */
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dahsboard-page/dahsboard-page.component').then(m => m.DahsboardPageComponent),

    children: [
      /** Página de tendencias (Trending GIFs). */
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component').then(m => m.TrendingPageComponent)
      },

      /** Página de búsqueda de GIFs. */
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component').then(m => m.SearchPageComponent)
      },

      /** Página de historial de búsqueda de GIFs con parámetro dinámico `query`. */
      {
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history/gif-history.component').then(m => m.GifHistoryComponent)
      },

      /** Ruta comodín dentro de `dashboard`, redirige a `trending`. */
      {
        path: '**',
        redirectTo: 'trending',
      }
    ]
  },

  /** Ruta comodín global, redirige a `dashboard`. */
  {
    path: '**',
    redirectTo: 'dashboard',
  }

];
