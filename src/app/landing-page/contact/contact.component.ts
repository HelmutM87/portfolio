import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false
  }

  mailTest = false;

  /**
 * Configuration for the HTTP POST request used to send the contact form data.
 * Contains the endpoint URL, the body formatting function, and HTTP options.
 */
  post = {
    endPoint: 'https://helmut-martens.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  /**
 * Determines if the submit button should be enabled based on the form's validity
 * and whether required fields are filled.
 * 
 * @param {NgForm} form - The form to validate.
 * @returns {boolean} True if the form is valid and all required fields are filled, false otherwise.
 */
  isButtonEnabled(form: NgForm): boolean {
    return !!(
      form.valid &&
      this.contactData.name.trim() !== '' &&
      this.contactData.email.trim() !== '' &&
      this.contactData.message.trim() !== '' &&
      this.contactData.privacyPolicy
    );
  }


  /**
 * Handles the form submission. Sends the form data via an HTTP POST request if the form is valid.
 * Resets the form upon successful submission.
 * 
 * @param {NgForm} ngForm - The form being submitted.
 */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => { ngForm.resetForm(); },
          error: (error) => { console.error(error); },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { ngForm.resetForm(); }
  }
}