import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.scss'
})
export class PortfolioComponentComponent {
  goToUrl(url: string) {
    window.location.href = url;
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
