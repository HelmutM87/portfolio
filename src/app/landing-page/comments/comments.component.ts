import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class CommentsComponent {
  teamMembers = [
    {
      name: 'Raphaela Multhaup',
      photo: './../../../assets/img/raphaela_multhaup.jpg',
      reviewKey: 'REVIEW_RAPHAELA'
    },
    {
      name: 'Grischa Tänzer',
      photo: './../../../assets/img/grischa-t.jpg',
      reviewKey: 'REVIEW_GRISCHA'
    }
  ];

  currentIndex = 0;

  constructor(private translate: TranslateService) { }

  /**
   * Advances to the next team member in the list.
   * If the current member is the last one, it wraps around to the first member.
  */
  showNextMember() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }

  /**
    * Moves to the previous team member in the list.
    * If the current member is the first one, it wraps around to the last member.
  */
  showPreviousMember() {
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }

  /**
   * Retrieves the currently selected team member.
   * @returns {TeamMember} The currently selected team member.
   */
  get currentMember() {
    return this.teamMembers[this.currentIndex];
  }

}
