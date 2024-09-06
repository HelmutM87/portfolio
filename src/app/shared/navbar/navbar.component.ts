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
  currentLang: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private translate: TranslateService, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(['en', 'de', 'es']); 
    this.translate.setDefaultLang('de');

  const browserLang = this.translate.getBrowserLang();
  this.currentLang = browserLang?.match(/en|de|es/) ? browserLang : 'de'; // Speichert die aktuelle Sprache

  this.translate.use(this.currentLang);  // Verwende die aktuelle Sprache
}

  /**
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   * Initializes click handlers for navigation links and the burger menu button.
   * Ensures that these initializations only occur in a browser environment.
   * 
   * @returns {void}
   */
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const links = this.el.nativeElement.querySelectorAll('.navbar a');
      const menuOverlay = this.el.nativeElement.querySelector('#menu-overlay');
      const body = document.body;

      this.initializeLinkClickHandlers(links, menuOverlay, body);
      this.initializeBurgerMenuHandler(menuOverlay, body);
    }
  }

  /**
   * Switches the application language based on the provided language code.
   * 
   * @param {string} lang - The language code to switch to.
   * @returns {void}
   */
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;  // Aktualisiert die aktuelle Sprache
  }


  /**
   * Initializes click handlers for navigation links to activate the clicked link
   * and optionally close the menu if it is active.
   * 
   * @param {NodeListOf<HTMLElement>} links - The list of navigation links.
   * @param {HTMLElement} menuOverlay - The menu overlay element.
   * @param {HTMLElement} body - The body element to modify overflow style.
   * @returns {void}
   */
  // private initializeLinkClickHandlers(links: NodeListOf<HTMLElement>, menuOverlay: HTMLElement, body: HTMLElement): void {
  //   links.forEach((link: HTMLElement) => {
  //     this.renderer.listen(link, 'click', () => {
  //       this.activateLink(link, links);
  //       if (this.isMenuActive) {
  //         this.toggleMenu(false, menuOverlay, body);
  //       }
  //     });
  //   });
  // }
  private initializeLinkClickHandlers(links: NodeListOf<HTMLElement>, menuOverlay: HTMLElement, body: HTMLElement): void {
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        if (!link.classList.contains('language-link')) { // Sprachlinks überspringen
          this.activateLink(link, links);
          if (this.isMenuActive) {
            this.toggleMenu(false, menuOverlay, body);
          }
        }
      });
    });
  }
  

  /**
   * Initializes the burger menu button handler to toggle the menu state.
   * 
   * @param {HTMLElement} menuOverlay - The menu overlay element.
   * @param {HTMLElement} body - The body element to modify overflow style.
   * @returns {void}
   */
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

  /**
   * Activates a specific navigation link by adding an 'active' class to it
   * and removing the 'active' class from all other links.
   * 
   * @param {HTMLElement} link - The link to be activated.
   * @param {NodeListOf<HTMLElement>} links - The list of all navigation links.
   * @returns {void}
   */
  // private activateLink(link: HTMLElement, links: NodeListOf<HTMLElement>): void {
  //   links.forEach((item: HTMLElement) => this.renderer.removeClass(item, 'active'));
  //   this.renderer.addClass(link, 'active');
  // }

  private activateLink(link: HTMLElement, links: NodeListOf<HTMLElement>): void {
    links.forEach((item: HTMLElement) => {
      if (!item.classList.contains('language-link')) { // Sprachlinks nicht beeinflussen
        this.renderer.removeClass(item, 'active');
      }
    });
    this.renderer.addClass(link, 'active');
  }
  

  /**
   * Toggles the menu visibility by adding or removing the 'active' class from
   * the burger menu and the 'd-none' class from the menu overlay. Also controls
   * the body overflow style to prevent scrolling when the menu is active.
   * 
   * @param {boolean} isActive - A boolean indicating whether the menu should be active or not.
   * @param {HTMLElement} menuOverlay - The menu overlay element.
   * @param {HTMLElement} body - The body element to modify overflow style.
   * @returns {void}
   */
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
