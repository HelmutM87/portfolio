import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Helmut Martens';

  constructor(private router: Router) {}

  ngOnInit() {
    // AOS global initialisieren
    AOS.init({
      duration: 1000,
      once: true,
      offset: 0,
      disable: false
    });

    // Scroll-Verhalten anpassen
    this.setupScrollBehavior();
  }

  ngOnDestroy() {
    AOS.refresh();
  }

  private setupScrollBehavior() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navigationEnd = event as NavigationEnd; // Explizite Typumwandlung
      const url = navigationEnd.urlAfterRedirects;
      const hasFragment = url.includes('#');

      if (!hasFragment) {
        window.scrollTo(0, 0);
      } else {
        console.log('Fragment detected, letting Angular handle anchor scrolling:', url);
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
  }
}