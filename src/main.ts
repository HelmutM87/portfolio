// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // Dauer der Animation in ms
  once: true, // Animationen werden nur einmal abgespielt, wenn true
  mirror: false // Ob Animationen rückwärts abgespielt werden sollen, wenn das Element den Viewport verlässt
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
