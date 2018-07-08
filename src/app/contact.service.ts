import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Contact } from './contact';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { findIndex } from 'lodash';


@Injectable()
export class ContactService {

	constructor(private http: Http) { }

	//retrieving contact details

	getContacts() {

		return this.http.get('http://localhost:3000/api/contacts')
			.map(res => res.json());
	}


	//add contact

	addContact(newContact) {

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:3000/api/contact', newContact, { headers: headers })
			.map(res => res.json());

	}

	//delete contact

	deleteContact(id) {

		return this.http.delete('http://localhost:3000/api/contact/' + id)
			.map(res => res.json());
	}



	updateContact(contact: Contact) {

		console.log(contact._id);

		return this.http.put('http://localhost:3000/api/edit_contact/' + contact._id, contact)
			.map(res => res.json());

		/*	let index = findIndex(this.pItems, (p: Product) => {
				return p.id === product.id;
			})
	
			this.pItems[index] = product;*/
	}

	/*updateProduct(contact: Contact) {

	let index = findIndex(this.pItems, (p: Product) => {
		return p.id === product.id;
	})

	this.pItems[index] = product;
}*/
}
