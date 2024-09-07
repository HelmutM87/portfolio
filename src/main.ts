import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true, 
  mirror: false 
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
