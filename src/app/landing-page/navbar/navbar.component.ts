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
  ) { }

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
   * Initializes click handlers for the navbar links.
   * Handles activating the clicked link and deactivating others,
   * and closing the menu if it's active.
   * 
   * @param {NodeListOf<HTMLElement>} links - The links in the navbar.
   * @param {HTMLElement} menuOverlay - The overlay element for the menu.
   * @param {HTMLElement} body - The document body.
   */
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

  /**
   * Initializes the click handler for the burger menu button.
   * Toggles the menu visibility and body overflow style.
   * 
   * @param {HTMLElement} menuOverlay - The overlay element for the menu.
   * @param {HTMLElement} body - The document body.
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
   * Activates the clicked link and deactivates other links.
   * 
   * @param {HTMLElement} link - The clicked link.
   * @param {NodeListOf<HTMLElement>} links - The list of all navbar links.
   */
  private activateLink(link: HTMLElement, links: NodeListOf<HTMLElement>): void {
    links.forEach((item: HTMLElement) => this.renderer.removeClass(item, 'active'));
    this.renderer.addClass(link, 'active');
  }

  /**
   * Toggles the visibility of the menu and updates the body overflow style.
   * 
   * @param {boolean} isActive - Whether the menu should be active (visible).
   * @param {HTMLElement} menuOverlay - The overlay element for the menu.
   * @param {HTMLElement} body - The document body.
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