// import { Component, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';
// import AOS from 'aos';

// @Component({
//   selector: 'app-my-skills-component',
//   standalone: true,
//   imports: [RouterModule, TranslateModule],
//   templateUrl: './my-skills-component.component.html',
//   styleUrls: ['./my-skills-component.component.scss']
// })
// export class MySkillsComponentComponent implements OnInit {
//   ngOnInit(): void {
//     AOS.init();
//     AOS.refresh();
//   }
// }



import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-my-skills-component',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './my-skills-component.component.html',
  styleUrls: ['./my-skills-component.component.scss']
})
export class MySkillsComponentComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      AOS.refresh();
    }
  }
}
