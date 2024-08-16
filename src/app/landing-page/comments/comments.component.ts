// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comments',
//   standalone: true,
//   templateUrl: './comments.component.html',
//   styleUrls: ['./comments.component.scss']
// })
// export class CommentsComponent {
//   // JSON-Array mit den Teammitgliedern
//   teamMembers = [
//     {
//       name: 'Raphaela Multhaup',
//       photo: './../../../assets/img/raphaela_multhaup.jpg',
//       review: 'Raphaela always brings fresh ideas and a sharp eye for frontend details to the table. Her organized approach and dependability make her a great teammate.'
//     },
//     {
//       name: 'Grischa Tänzer',
//       photo: './../../../assets/img/grischa-portrait.jpg',
//       review: 'Helmut has a strong ability to think outside the box and bring innovative solutions. His technical skills and dedication are invaluable to the team.'
//     }
//   ];

//   currentIndex = 0;

//   // Funktion zum Anzeigen des nächsten Teammitglieds
//   showNextMember() {
//     this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
//   }

//   // Funktion zum Anzeigen des vorherigen Teammitglieds
//   showPreviousMember() {
//     this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
//   }

//   // Aktuell angezeigtes Teammitglied
//   get currentMember() {
//     return this.teamMembers[this.currentIndex];
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  imports: [CommonModule]  // Importiere das CommonModule
})
export class CommentsComponent {
  // JSON-Array mit den Teammitgliedern
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

  // Funktion zum Anzeigen des nächsten Teammitglieds
  showNextMember() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }

  // Funktion zum Anzeigen des vorherigen Teammitglieds
  showPreviousMember() {
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }

  // Aktuell angezeigtes Teammitglied
  get currentMember() {
    return this.teamMembers[this.currentIndex];
  }
}
