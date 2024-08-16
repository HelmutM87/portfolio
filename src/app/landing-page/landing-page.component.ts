import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { AboutMeComponentComponent } from "./about-me-component/about-me-component.component";
import { MySkillsComponentComponent } from "./my-skills-component/my-skills-component.component";
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboveTheFoldComponent, AboutMeComponentComponent, MySkillsComponentComponent, PortfolioComponentComponent, CommentsComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

// @Component({
//   selector: 'app-landing-page',
//   standalone: true,
//   imports: [
//     NavbarComponent,
//     FooterComponent,
//     AboveTheFoldComponent,
//     AboutMeComponentComponent,
//     MySkillsComponentComponent,
//     PortfolioComponentComponent,
//     CommentsComponent,
//     ContactComponent
//   ],
//   templateUrl: './landing-page.component.html',
//   styleUrls: ['./landing-page.component.scss']  // Hier "styleUrls" anstelle von "styleUrl"
// })
// export class LandingPageComponent {}

