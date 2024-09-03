// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { Renderer2, ElementRef } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';  // Importiere den TranslateService

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterModule, TranslateModule], // Entferne TranslateService hier
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent implements AfterViewInit {

//   private isMenuActive = false;

//   constructor(
//     private renderer: Renderer2,
//     private el: ElementRef,
//     private translate: TranslateService,  // Füge den TranslateService im Constructor hinzu
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {
//     this.translate.addLangs(['en', 'de']); // Sprachen hinzufügen
//     this.translate.setDefaultLang('en'); // Standardsprache setzen

//     const browserLang = this.translate.getBrowserLang();

//     if (browserLang) {
//       this.translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
//     } else {
//       this.translate.use('en');
//     }
//   }

//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       const links = this.el.nativeElement.querySelectorAll('.navbar a');
//       const menuOverlay = this.el.nativeElement.querySelector('#menu-overlay');
//       const body = document.body;

//       this.initializeLinkClickHandlers(links, menuOverlay, body);
//       this.initializeBurgerMenuHandler(menuOverlay, body);
//     }
//   }

//   private initializeLinkClickHandlers(links: NodeListOf<HTMLElement>, menuOverlay: HTMLElement, body: HTMLElement): void {
//     links.forEach((link: HTMLElement) => {
//       this.renderer.listen(link, 'click', () => {
//         this.activateLink(link, links);
//         if (this.isMenuActive) {
//           this.toggleMenu(false, menuOverlay, body);
//         }
//       });
//     });
//   }

//   private initializeBurgerMenuHandler(menuOverlay: HTMLElement, body: HTMLElement): void {
//     const burgerMenuButton = this.el.nativeElement.querySelector('#burger-menu-button');
//     const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');

//     if (burgerMenuButton) {
//       this.renderer.listen(burgerMenuButton, 'click', () => {
//         this.isMenuActive = !this.isMenuActive;
//         this.toggleMenu(this.isMenuActive, menuOverlay, body);
//       });
//     }
//   }

//   private activateLink(link: HTMLElement, links: NodeListOf<HTMLElement>): void {
//     links.forEach((item: HTMLElement) => this.renderer.removeClass(item, 'active'));
//     this.renderer.addClass(link, 'active');
//   }

//   private toggleMenu(isActive: boolean, menuOverlay: HTMLElement, body: HTMLElement): void {
//     const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');
//     if (isActive) {
//       this.renderer.addClass(burgerMenu, 'active');
//       this.renderer.removeClass(menuOverlay, 'd-none');
//       this.renderer.setStyle(body, 'overflow', 'hidden');
//     } else {
//       this.renderer.removeClass(burgerMenu, 'active');
//       this.renderer.addClass(menuOverlay, 'd-none');
//       this.renderer.setStyle(body, 'overflow', '');
//     }
//   }
// }


import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  private isMenuActive = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private translate: TranslateService,  // TranslateService hinzugefügt
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(['en', 'de', 'es']); // Sprachen hinzufügen
    this.translate.setDefaultLang('en'); // Standardsprache setzen

    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      this.translate.use(browserLang.match(/en|de|es/) ? browserLang : 'en');
    } else {
      this.translate.use('en');
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const links = this.el.nativeElement.querySelectorAll('.navbar a');
      const menuOverlay = this.el.nativeElement.querySelector('#menu-overlay');
      const body = document.body;

      this.initializeLinkClickHandlers(links, menuOverlay, body);
      this.initializeBurgerMenuHandler(menuOverlay, body);
    }
  }

  // Methode zum Wechseln der Sprache
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  private initializeLinkClickHandlers(links: NodeListOf<HTMLElement>, menuOverlay: HTMLElement, body: HTMLElement): void {
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        this.activateLink(link, links);
        if (this.isMenuActive) {
          this.toggleMenu(false, menuOverlay, body);
        }
      });
    });
  }

  private initializeBurgerMenuHandler(menuOverlay: HTMLElement, body: HTMLElement): void {
    const burgerMenuButton = this.el.nativeElement.querySelector('#burger-menu-button');
    const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');

    if (burgerMenuButton) {
      this.renderer.listen(burgerMenuButton, 'click', () => {
        this.isMenuActive = !this.isMenuActive;
        this.toggleMenu(this.isMenuActive, menuOverlay, body);
      });
    }
  }

  private activateLink(link: HTMLElement, links: NodeListOf<HTMLElement>): void {
    links.forEach((item: HTMLElement) => this.renderer.removeClass(item, 'active'));
    this.renderer.addClass(link, 'active');
  }

  private toggleMenu(isActive: boolean, menuOverlay: HTMLElement, body: HTMLElement): void {
    const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');
    if (isActive) {
      this.renderer.addClass(burgerMenu, 'active');
      this.renderer.removeClass(menuOverlay, 'd-none');
      this.renderer.setStyle(body, 'overflow', 'hidden');
    } else {
      this.renderer.removeClass(burgerMenu, 'active');
      this.renderer.addClass(menuOverlay, 'd-none');
      this.renderer.setStyle(body, 'overflow', '');
    }
  }
}
