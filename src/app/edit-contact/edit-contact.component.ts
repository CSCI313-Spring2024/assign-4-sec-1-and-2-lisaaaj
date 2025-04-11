import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact.data';


@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent {
  contactService = inject(ContactService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  //id = input.required<number>();
  editingContact: Contact | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.editingContact = this.contactService
          .getContacts()
          .find((c) => c.id === id);
      }
    });
  }

  updateContact(): void {
    if (this.editingContact) {
      this.contactService.updateContact(this.editingContact);
      this.router.navigate(['/']);
    }
  }

  cancelEdit(): void {
    this.router.navigate(['/']);
  }
}
