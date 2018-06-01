import React, { Component } from 'react';

import ContactList from '../Components/ContactList'

class Contacts extends Component {
	constructor(){
		super();
		this.state = {
			contactList: [{
				createdAt: new Date(),
				id: new Date().valueOf(),
				firstName: "John",
				lastName: 'Doe',
				age: 33
			}]
		};
	}

	componentDidMount(){
		console.log(this.state.contactList[0])
	}
	render(){
		return(
			<div>
				<h1> Contacts Page</h1>
				<ContactList contacts={this.state.contactList}/>
			</div>
		)
	}
}

export default Contacts