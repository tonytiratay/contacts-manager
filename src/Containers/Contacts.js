import React, { Component } from 'react';

import ContactForm from '../Components/ContactForm'

class Contacts extends Component {
	render(){
		return(
			<div>
				<h1> Contacts Liste</h1>
				<ContactForm />
			</div>
		)
	}
}

export default Contacts