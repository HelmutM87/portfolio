// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-my-skills-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './my-skills-component.component.html',
//   styleUrl: './my-skills-component.component.scss'
// })
// export class MySkillsComponentComponent {

// }

import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills-component',
  imports: [RouterModule, TranslateModule],
  standalone: true,
  templateUrl: './my-skills-component.component.html',
  styleUrls: ['./my-skills-component.component.scss']
})
export class MySkillsComponentComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const element = this.elRef.nativeElement.querySelector('.skills-icon > img');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('fall');
          observer.unobserve(element); // Stop observing once the animation starts
        }
      });
    });

    observer.observe(element);
  }
}
