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


  showNextMember() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }

  
  showPreviousMember() {
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }

  
  get currentMember() {
    return this.teamMembers[this.currentIndex];
  }
}
