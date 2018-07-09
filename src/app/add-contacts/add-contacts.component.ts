import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
  
})
export class AddContactsComponent implements OnInit {

  private first_name: string;
  private last_name: string;
  private phone: string;
  
    constructor(private contactService: ContactService) {
      this.first_name = '';
      this.last_name = '';
      this.phone = '';
    }
  
    ngOnInit() {
    }
  
    public addContact(): void {
      this.contactService.addContact(this.first_name, this.last_name, this.phone);
      this.first_name = '';
      this.last_name = '';
      this.phone = '';
    }

}
