import React, { Component } from 'react';
import ContactItem from '../Components/ContactItem';

class ContactList extends Component {

	handleToggleContactNew(){
		this.props.onToggleContactNew('new');
	}

	handleContactClick(contact){
		this.props.onClick(contact);
	}

	render(){
		const { contacts } = this.props;
		let style = this.style();
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

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				justifyItems: 'flex-start',
			},
			item: {
				maxHeight: 90,
			},
			buttonContainer: {
				padding: '15px 0',
			},
			button: {
				padding: 10,
				background: '#48d611',
				color: '#fff',
				height: '17px',
				textAlign: 'center',
				cursor: 'pointer',
				borderRadius: 15,
				maxWidth: 200,
				margin: 'auto',
			},
			title: {
				flex: 1,
				fontWeight: 300,
				paddingLeft: 15,

			}
		};
	}
}

export default ContactList