import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  contactService = inject(ContactService);
  router = inject(Router);
  newContact: { fname: string; lname: string; number: string; email: string } =
    {
      fname: '',
      lname: '',
      number: '',
      email: '',
    };

  addContact(): void {
    this.contactService.addAccount(
      this.newContact.fname,
      this.newContact.lname,
      this.newContact.number,
      this.newContact.email
    );
    this.router.navigate(['/']); // Navigate back to the contact list
  }

  cancelAddContact(): void {
    this.router.navigate(['/']); // Navigate back to the contact list
  }
}
