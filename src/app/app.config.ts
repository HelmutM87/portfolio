// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
// };


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, RouterModule } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient, HttpClient } from '@angular/common/http';

// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClientModule } from '@angular/common/http';
// import { importProvidersFrom } from '@angular/core';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }


// export const appConfig: ApplicationConfig = {
//   providers: [
//       importProvidersFrom([
//         RouterModule,
//           HttpClientModule, 
//           TranslateModule.forRoot({
//               defaultLanguage: 'en',
//               loader: {
//                   provide: TranslateLoader,
//                   useFactory: HttpLoaderFactory,
//                   deps: [HttpClient]
//               }
//           })
//       ]),
//   ],
// };


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, RouterModule } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient, HttpClientModule } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { importProvidersFrom } from '@angular/core';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     importProvidersFrom([
//       RouterModule.forRoot(routes), // Füge RouterModule hier hinzu
//       HttpClientModule,
//       TranslateModule.forRoot({
//         defaultLanguage: 'en',
//         loader: {
//           provide: TranslateLoader,
//           useFactory: HttpLoaderFactory,
//           deps: [HttpClient]
//         }
//       })
//     ]),
//     provideRouter(routes),
//     provideClientHydration(),
//     provideHttpClient()
//   ],
// };


import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, HttpClientModule, HttpClient } from '@angular/common/http'; // Importiere HttpClient hier
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      RouterModule.forRoot(routes), // Füge RouterModule hier hinzu
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ]),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient()
  ],
};
