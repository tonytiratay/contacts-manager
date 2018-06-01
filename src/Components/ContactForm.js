import React, { Component } from 'react';

const blankUser = {
	firstName: '',
	lastName: '',
	facebook: false,
	linkedin: false,
	Github: false,
	tags: []
};

class ContactForm extends Component{

	constructor(){
		super()
		this.state = { user: { ...blankUser } };
	}

	handleClose(){
		this.props.setView('list');
	}

	handleChange(e){
		let updateUser = { ...this.state.user };
		updateUser[e.target.name] = e.target.value;this.setState({ user: updateUser });
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(e);
	}

	render(){
		const style = this.style();
		let { user } = this.state;
		return(
			<div>
				<h3>Contact Form</h3>
				<form onSubmit = { this.handleSubmit.bind(this) }>

					<div style={ style.formInputs }>

						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="firstName">Prenom</label>
							<input 
								style={ style.forminput }
								id="firstName"
								name="firstName"
								value={ user.firstName }
								onChange={ this.handleChange.bind(this) }/>
						</div>

						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="lastName">Nom</label>
							<input 
								style={ style.forminput }
								id="lastName"
								name="lastName"
								value={ user.lastName }
								onChange={ this.handleChange.bind(this) }/>
						</div>
						
					</div>

					<div style={ style.formActions }>

						<div style={ style.buttonCancel } onClick={ this.handleClose.bind(this) }>Annuler</div>
						<div style={ style.buttonConfirm } onClick={ this.handleSubmit.bind(this) }>Sauver</div>

					</div>
				</form>
			</div>
		)
	}
	style(){
		return {
			buttonCancel: {
				flex: 1,
				padding: 15,
				background: '#ff0000',
				color: '#fff',
				height: '17px',
				textAlign: 'center',
				cursor: 'pointer',
			},
			buttonConfirm: {
				flex: 1,
				padding: 15,
				background: '#48d611',
				color: '#fff',
				height: '17px',
				textAlign: 'center',
				cursor: 'pointer',
			},
			formActions: {
				display: 'flex',
			},
			formInputs: {
				display: 'flex',
			},
			formInputContainer: {
				flex: 1,
			},
			forminput: {
				padding: 10,
				width: '100%',
			},
			label: {
				marginRight: 10,
			}
		}
	}
}

export default ContactForm