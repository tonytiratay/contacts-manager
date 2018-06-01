import React, { Component } from 'react';

const blankUser = {
	firstName: '',
	lastName: '',
	email: '',
	description: '',
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
			<div style={style.container}>
			<h1 style={style.title}>Créer un nouveau contact</h1>
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
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="email">Mail</label>
							<input 
								style={ style.forminput }
								id="email"
								name="email"
								value={ user.email }
								onChange={ this.handleChange.bind(this) }/>
						</div>
					</div>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="description">Description</label>
							<textArea 
								rows="10"
								style={ style.forminput }
								id="description"
								name="description"
								value={ user.description }
								onChange={ this.handleChange.bind(this) }>
							</textArea>
						</div>
					</div>
					<div style={ style.formInputs }>

						<div style={ style.buttonCancel } onClick={ this.handleClose.bind(this) }>Annuler</div>
						<div style={ style.buttonConfirm } onClick={ this.handleSubmit.bind(this) }>Sauver</div>

					</div>
				</form>
			</div>
		)
	}
	style(){
		return {
			container: {
				maxWidth: '960px',
				margin: 'auto',
			},
			title: {
				fontWeight: 300,
			},
			buttonCancel: {
				flex: 1,
				padding: 15,
				margin: '10px',
				background: '#ff0000',
				color: '#fff',
				height: '17px',
				textAlign: 'center',
				cursor: 'pointer',
			},
			buttonConfirm: {
				flex: 1,
				padding: 15,
				margin: '10px',
				background: '#48d611',
				color: '#fff',
				height: '17px',
				textAlign: 'center',
				cursor: 'pointer',
			},
			formInputs: {
				display: 'flex',
				border: '1px solid #eee',
				marginBottom: 15,
				padding: 15,
			},
			formInputContainer: {
				display: 'flex',
				alignItems: 'center',
				flex: 1,
				margin: '10px'
			},
			forminput: {
				padding: 10,
				flex: 1,
				border: '1px solid #eee',
			},
			label: {
				marginRight: 10,
			}
		}
	}
}

export default ContactForm