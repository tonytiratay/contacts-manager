import React, { Component } from 'react';
import ContactItem from '../Components/ContactItem';
import style from '../style/contactList';
import PropTypes from 'prop-types';

class ContactList extends Component {

	handleToggleContactNew(){
		this.props.onToggleContactNew('new');
	}

	handleContactClick(contact){
		this.props.onClick(contact);
	}

	changeFilter(e){
		this.props.changeFilter(e.target.value)
	}

	render(){
		const { contacts } = this.props;
		return(
			<div style={style.container}>
				<div style={style.buttonContainer}>
					<div 
						style={style.button} 
						onClick={this.handleToggleContactNew.bind(this)}>Nouveau Contact
					</div>
					<input 
						type="text" 
						value={this.props.filter} 
						onChange={this.changeFilter.bind(this)}
						name='filter' />

				</div>
				{ contacts.map((contact, index)=>{
					return (
						<div style={ style.item } key={contact.id}>
							<ContactItem 
								contact={contact} 
								key={contact.id} 
								index={index} 
								onClick={this.handleContactClick.bind(this, contact)}/>
						</div>
					)
				}) }
			</div>
		);
	}
}

ContactList.propTypes = {
	contacts: PropTypes.array,
	onClick: PropTypes.func,
	onToggleContactNew: PropTypes.func,
}

export default ContactList