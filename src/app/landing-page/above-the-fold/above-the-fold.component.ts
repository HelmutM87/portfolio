import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
