import React, { Component } from 'react';

// import ContactForm from '../Components/ContactForm';
import ContactItem from '../Components/ContactItem';

class ContactList extends Component {



	render(){
		const { contacts } = this.props;
		return(
			<div>
				<h2> Contacts Liste</h2>
				{ contacts.map((contact)=>{
					return (
						<ContactItem contact={contact} key={contact.id}/>
					)
				}) }
			</div>
		)
	}
}

export default ContactList