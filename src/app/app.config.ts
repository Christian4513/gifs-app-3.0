import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

/**
 * Configuración principal de la aplicación Angular.
 * Define los proveedores globales como el enrutamiento, el cliente HTTP y la detección de cambios.
 *
 * Esta constante se pasa al método `bootstrapApplication` en el punto de entrada de la app.
 *
 * @const
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Proveedor para mejorar el rendimiento de la detección de cambios
     * mediante la combinación de eventos.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del enrutador con las rutas de la aplicación.
     */
    provideRouter(routes),

    /**
     * Proveedor del cliente HTTP configurado para usar `fetch`.
     */
    provideHttpClient(withFetch())
  ]
};
