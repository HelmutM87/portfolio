// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-portfolio-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './portfolio-component.component.html',
//   styleUrl: './portfolio-component.component.scss'
// })
// export class PortfolioComponentComponent {
//   goToUrl(url: string) {
//     window.location.href = url;
//   }
// }

import { Component, ElementRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.scss']
})
export class PortfolioComponentComponent implements AfterViewInit {
  @ViewChildren('portfolioItem') portfolioItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    this.portfolioItems.forEach(item => {
      observer.observe(item.nativeElement);
    });
  }

  goToUrl(url: string) {
    window.location.href = url;
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
