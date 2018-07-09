export class Contact {

	_id?: number;
	first_name: string;
	last_name: string;
	phone: string;

	constructor(first_name: string, last_name: string, phone: string, _id?:number){
			this.first_name= first_name;
			this.last_name = last_name;
			this.phone = phone;
			this._id = _id;
	}
}