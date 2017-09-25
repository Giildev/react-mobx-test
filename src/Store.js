import { observable } from 'mobx';

class ContactStore {
	// Contact store with basic data to show
	@observable
	contact = [
		{
			name: 'Jhon',
			lastName: 'Doe',
			phone: '5555555',
			email: 'JhonDoe@mail.com'
		}
	];

	// recive data from app and push it on contact array
	createNewContact(data) {
		this.contact.push(data);
	}

	// search an specific item (which has been clicked) and delete it from array of contacts
	deleteContact(data) {
		var index = this.contact.indexOf(data);
		this.contact.splice(index, 1);
	}
}

var Store = new ContactStore();

export default Store;
