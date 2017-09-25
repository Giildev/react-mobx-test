import React, { Component } from 'react';
import { AppBar, MuiThemeProvider, TextField, FlatButton } from 'material-ui';
import { observer } from 'mobx-react';

import './styles.css';

@observer
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			lastName: '',
			phone: '',
			email: ''
		};
	}

	// Create New Contact Function, verify if form isnt empty and send it to createNewContact on store file
	createNew = () => {
		if (
			this.state.name !== '' &&
			this.state.lastName !== '' &&
			this.state.phone !== '' &&
			this.state.email !== ''
		) {
			this.props.store.createNewContact(this.state);
		} else {
			alert('Complete form to continue');
		}
	};

	// Send data to deleteContact Function on Store file
	delete = contact => {
		this.props.store.deleteContact(contact);
	};

	render() {
		const { contact } = this.props.store;

		// render a list of contact for each element in array on store file
		const contactList = contact.map(contact => {
			if (!contact.delete) {
				return (
					<li key={Math.random()} className="content__list-item">
						<div className="content__list-data">
							Name: <strong>{contact.name}</strong>
						</div>
						<div className="content__list-data">
							Last Name: <strong>{contact.lastName}</strong>
						</div>
						<div className="content__list-data">
							Phone: <strong>{contact.phone}</strong>
						</div>
						<div className="content__list-data">
							Email: <strong>{contact.email}</strong>
						</div>
						<div
							onClick={e => {
								this.delete(contact);
							}}
							className="delete"
						/>
					</li>
				);
			}
			return true;
		});

		return (
			<MuiThemeProvider>
				<div className="app">
					<AppBar title="React + Mobx Test" />
					{/* Form fields to create a new contact, after click on Add button it send every input value from this.state */}
					<form className="form">
						<TextField
							onChange={e => {
								this.setState({ name: e.target.value });
							}}
							className="form__input"
							hintText="Jhon"
							floatingLabelText="Name"
						/>
						<TextField
							onChange={e => {
								this.setState({ lastName: e.target.value });
							}}
							className="form__input"
							hintText="Doe"
							floatingLabelText="Last Name"
						/>
						<TextField
							onChange={e => {
								this.setState({ phone: e.target.value });
							}}
							className="form__input"
							hintText="5555555"
							floatingLabelText="Phone Number"
						/>
						<TextField
							onChange={e => {
								this.setState({ email: e.target.value });
							}}
							className="form__input"
							hintText="Jhon@doe.com"
							floatingLabelText="Email"
						/>
						<FlatButton
							onClick={e => this.createNew(e)}
							label="Add"
							primary={true}
						/>
					</form>
					<div className="content">
						<ul className="content__list">{contactList}</ul>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
