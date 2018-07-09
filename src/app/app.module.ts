import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ContactService } from './contact.service';


@NgModule({
	declarations: [
		AppComponent,
		ContactsComponent,
		HeaderComponent,
		AddContactsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [ContactService],
	bootstrap: [AppComponent]
})
export class AppModule { }
