import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, FooterComponent, LandingPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helmut Martens';
}
