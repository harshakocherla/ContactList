import { Component, OnInit, Input } from '@angular/core';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

import { clone } from 'lodash';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

	@Input()
	private contact: Contact;
	public edit_contact: any = {};
  
	constructor(private contactService: ContactService) { }


	public deleteContact(): void {
		console.log(this.contact);
		
		this.contactService.deleteContact(this.contact._id);
	}


	public showEditContact(contact: Contact): void {
		this.edit_contact = clone(contact);
	}

	ngOnInit() {
	}



}
