import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.data';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent implements OnInit {
  contactService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log('Loaded contacts:', this.contacts);
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

  trackById(index: number, contact: Contact): number {
    return contact.id;
  }

  constructor(private router: Router) {}
  goToEdit(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
