import React, { Component } from 'react';
import ContactItem from '../Components/ContactItem';
import style from '../style/contactList';

class ContactList extends Component {

	handleToggleContactNew(){
		this.props.onToggleContactNew('new');
	}

	handleContactClick(contact){
		this.props.onClick(contact);
	}

	render(){
		const { contacts } = this.props;
		return(
			<div style={style.container}>
				<div style={style.buttonContainer}>
					<div style={style.button} onClick={this.handleToggleContactNew.bind(this)}>Nouveau Contact</div>
				</div>
				{ contacts.map((contact, index)=>{
					return (
						<div style={ style.item } key={contact.id}>
							<ContactItem contact={contact} key={contact.id} index={index} onClick={this.handleContactClick.bind(this, contact)}/>
						</div>
					)
				}) }
			</div>
		);
	}
}

export default ContactList