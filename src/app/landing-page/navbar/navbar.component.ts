

import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  private isMenuActive = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Navigation Links Aktivieren
      const links = this.el.nativeElement.querySelectorAll('.navbar a');
      const menuOverlay = this.el.nativeElement.querySelector('#menu-overlay');

      links.forEach((link: HTMLElement) => {
        this.renderer.listen(link, 'click', () => {
          links.forEach((item: HTMLElement) => this.renderer.removeClass(item, 'active'));
          this.renderer.addClass(link, 'active');

          // Menü ausblenden, wenn ein Link angeklickt wird
          if (this.isMenuActive) {
            this.renderer.removeClass(this.el.nativeElement.querySelector('.burger-menu'), 'active');
            this.renderer.addClass(menuOverlay, 'd-none');
            this.isMenuActive = false;
          }
        });
      });

      // Burger Menü Button Animation
      const burgerMenuButton = this.el.nativeElement.querySelector('#burger-menu-button');
      const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');

      if (burgerMenuButton) {
        this.renderer.listen(burgerMenuButton, 'click', () => {
          this.isMenuActive = !this.isMenuActive;
          if (this.isMenuActive) {
            this.renderer.addClass(burgerMenu, 'active');
            this.renderer.removeClass(menuOverlay, 'd-none');
          } else {
            this.renderer.removeClass(burgerMenu, 'active');
            this.renderer.addClass(menuOverlay, 'd-none');
          }
        });
      }
    }
  }
}

// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { Renderer2, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent implements AfterViewInit {

//   private isMenuActive = false;

//   constructor(
//     private renderer: Renderer2,
//     private el: ElementRef,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       const links = this.el.nativeElement.querySelectorAll('.navbar a');
//       const burgerMenuButton = this.el.nativeElement.querySelector('#burger-menu-button');
//       const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');
//       const menuOverlay = this.el.nativeElement.querySelector('#menu-overlay');

//       // Toggle Burger Menu and Scroll Lock
//       if (burgerMenuButton) {
//         this.renderer.listen(burgerMenuButton, 'click', () => {
//           this.isMenuActive = !this.isMenuActive;
//           if (this.isMenuActive) {
//             this.renderer.addClass(burgerMenu, 'active');
//             this.renderer.removeClass(menuOverlay, 'd-none');
//             this.renderer.addClass(document.body, 'no-scroll');
//           } else {
//             this.renderer.removeClass(burgerMenu, 'active');
//             this.renderer.addClass(menuOverlay, 'd-none');
//             this.renderer.removeClass(document.body, 'no-scroll');
//           }
//         });
//       }

//       // Deactivate menu on link click
//       links.forEach((link: HTMLElement) => {
//         this.renderer.listen(link, 'click', () => {
//           this.renderer.removeClass(burgerMenu, 'active');
//           this.renderer.addClass(menuOverlay, 'd-none');
//           this.renderer.removeClass(document.body, 'no-scroll');
//         });
//       });
//     }
//   }
// }
