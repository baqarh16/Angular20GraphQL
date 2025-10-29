import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// 💡 IMPORTANT: Import APOLLO_OPTIONS and Apollo
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular'; 
import { apolloClientFactory } from './graphql.provider';
// 💡 IMPORTANT: Import your factory function

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideHttpClient(), 

    // 🏆 FIX: Correctly register the custom Apollo Client
    {
        // 1. Specify the injection token for Apollo's configuration
        provide: APOLLO_OPTIONS,
        // 2. Use your factory function to create the client instance
        useFactory: apolloClientFactory,
    },
    // 3. Provide the Apollo service itself
    Apollo 
    
    // NOTE: If you previously had the generic provideApollo() in here, you must remove it.
  ]
};