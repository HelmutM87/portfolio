import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  imports: [CommonModule]
})
export class CommentsComponent {
  teamMembers = [
    {
      name: 'Raphaela Multhaup',
      photo: './../../../assets/img/raphaela_multhaup.jpg',
      review: 'Helmut always brings fresh ideas and a sharp eye for frontend details to the table. His organized approach and dependability make him a great teammate.'
    },
    {
      name: 'Grischa Tänzer',
      photo: './../../../assets/img/grischa-t.jpg',
      review: 'I really enjoyed working with Helmut on our frontend project. He was always friendly and open to new ideas. Collaborating with him was not only productive but also very pleasant. His ability to work as part of a team and respond to the needs of the group greatly contributed to the success of our project.'
    }
  ];

  currentIndex = 0;

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
