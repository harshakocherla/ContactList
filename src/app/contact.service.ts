import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {

	private contacts: Contact[];
	private nextId: number;
  
	constructor() {
	  this.contacts = [
		new Contact("Harsha", "Kocherla", "(612) 405-0553", 0),
	  ];
  
	  this.nextId = 3;
	}

	//retrieving contact details

	public getContacts(): Contact[]{
		return this.contacts;
	}

	//add contact

	public addContact(first_name: string, last_name: string, phone: string) {
		const contact = new Contact(first_name, last_name, phone, this.nextId);
		this.contacts.push(contact);
		this.nextId++;
	}

	//delete contact

	public deleteContact(id: number): void {
		console.log(this.contacts);
		
		this.contacts = this.contacts.filter((contact) => contact._id != id);
	}

}
