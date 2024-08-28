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

      links.forEach((link: HTMLElement) => {
        this.renderer.listen(link, 'click', () => {
          links.forEach((item: HTMLElement) => this.renderer.removeClass(item, 'active'));
          this.renderer.addClass(link, 'active');
          if (this.isMenuActive) {
            this.renderer.removeClass(this.el.nativeElement.querySelector('.burger-menu'), 'active');
            this.renderer.addClass(menuOverlay, 'd-none');
            this.renderer.setStyle(body, 'overflow', '');  // Re-enable scroll
            this.isMenuActive = false;
          }
        });
      });

      const burgerMenuButton = this.el.nativeElement.querySelector('#burger-menu-button');
      const burgerMenu = this.el.nativeElement.querySelector('.burger-menu');

      if (burgerMenuButton) {
        this.renderer.listen(burgerMenuButton, 'click', () => {
          this.isMenuActive = !this.isMenuActive;
          if (this.isMenuActive) {
            this.renderer.addClass(burgerMenu, 'active');
            this.renderer.removeClass(menuOverlay, 'd-none');
            this.renderer.setStyle(body, 'overflow', 'hidden');  // Disable scroll
          } else {
            this.renderer.removeClass(burgerMenu, 'active');
            this.renderer.addClass(menuOverlay, 'd-none');
            this.renderer.setStyle(body, 'overflow', '');  // Re-enable scroll
          }
        });
      }
    }
  }
}
