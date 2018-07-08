import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

import { clone } from 'lodash';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css'],
	providers: [ContactService]
})
export class ContactsComponent implements OnInit {

	constructor(private contactService: ContactService) { }

	contacts: Contact[];
	contact: Contact;
	first_name: string;
	last_name: string;
	phone: string;
	edit_contact: any = {};


	addContact() {
		const newContact = {
			first_name: this.first_name,
			last_name: this.last_name,
			phone: this.phone
		}

		this.contactService.addContact(newContact)
			.subscribe(contact => {
				this.contacts.push(contact);

				this.contactService.getContacts()
					.subscribe(contacts => this.contacts = contacts);
			});



	}

	deleteContact(id: any) {

		var contacts = this.contacts;

		this.contactService.deleteContact(id)
			.subscribe(data => {
				if (data.n == 1) {
					for (var i = 0; i < contacts.length; i++) {
						if (contacts[i]._id == id) {
							contacts.splice(i, 1);
						}
					}
				}
			});
	}


	showEditContact(contact: Contact) {

		this.edit_contact = clone(contact);
	}

	updateContact() {
		this.contactService.updateContact(this.edit_contact)
			.subscribe(contact => this.edit_contact = contact);
		this.edit_contact = {};
	}


	ngOnInit() {

		var data = this.contactService.getContacts()
			.subscribe(contacts => this.contacts = contacts);

		console.log(data);
	}



}
