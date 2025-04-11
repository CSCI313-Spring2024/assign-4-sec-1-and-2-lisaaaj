import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: ContactsComponent, title: 'Contact List' },
  { path: 'add', component: AddContactComponent, title: 'Add Contact' },
  { path: 'edit/:id', component: EditContactComponent, title: 'Edit Contact' },
];
