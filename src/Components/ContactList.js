import React, { Component } from 'react';
import ContactItem from '../Components/ContactItem';

const mainColor = "#222";

class ContactList extends Component {

	handleToggleContactNew(){
		this.props.onToggleContactNew('new')
	}

	render(){
		const { contacts } = this.props;
		let style = this.style();
		return(
			<div style={style.container}>
				<div style={style.button} onClick={this.handleToggleContactNew.bind(this)}>Nouveau Contact</div>
				{ contacts.map((contact, index)=>{
					return (
						<ContactItem contact={contact} key={contact.id} index={index}/>
					)
				}) }
			</div>
		)
	}

	style(){
		return {
			container: {
				borderRight: '5px solid ' + mainColor,
			},
			button: {
				padding: 15,
				background: '#48d611',
				color: '#fff',
				height: '17px',
				textAlign: 'center',
				cursor: 'pointer'
			},
			title: {
				flex: 1,
				fontWeight: 300,
				paddingLeft: 15,

			}
		}
	}
}

export default ContactList