import { Routes } from '@angular/router';


export const routes: Routes = [
  // este path esta cargado con lazy load (carga peresoza)
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dahsboard-page/dahsboard-page.component').then(m => m.DahsboardPageComponent),

    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component').then(m => m.TrendingPageComponent)
      },

      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component').then(m => m.SearchPageComponent)
      },
      {
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history/gif-history.component').then(m => m.GifHistoryComponent)
      },
      {
        path: '**',
        redirectTo: 'trending',
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  }

];
