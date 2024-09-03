import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './about-me-component.component.html',
  styleUrl: './about-me-component.component.scss'
})
export class AboutMeComponentComponent {

}
