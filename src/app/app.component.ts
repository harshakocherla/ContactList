import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import {Contact} from './contact';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ContactService]
})
export class AppComponent {
	title = 'Contact List';
	constructor(public contactService: ContactService){}
}
