// src/app/contact.service.ts
import { Injectable } from '@angular/core';
import { Contact } from './contact.data';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      fname: 'Syanne',
      lname:  'Voxland',
      email: 'syanne@gmail.com',
      number: '(234)-576-3432',
    },

    {
      id: 2,
      fname: 'Karsten',
      lname: 'Larson',
      email: 'larson@gmail.com',
      number: '(324)-726-4982',
    },

    {
      id: 3,
      fname: 'Gavyn',
      lname: 'Nygren',
      email: 'nygren@gmail.com',
      number: '(234)-574-8982',
    },
  ];

  constructor() {}

  getContacts(): Contact[] {
    return this.contacts;
  }

  addAccount(fname: string, lname: string, number: string, email: string) {
    const newContact: Contact = {
      id: this.contacts.length + 1,
      fname,
      lname,
      email,
      number,
    };
    this.contacts.push(newContact);
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }
}
