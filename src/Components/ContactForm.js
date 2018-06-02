import React, { Component } from 'react';
import SelectTag from './SelectTag';

const blankUser = {
	firstName: '',
	lastName: '',
	phone: '',
	description: '',
	avatar: 'https://placeimg.com/200/200/people',
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
		let { value, name } = e.target;
		updateUser[name] = name === 'tags' ? [value] : value;
		this.setState({ user: updateUser });
	}

	addTag(tag){
		let newUser = this.state.user;
		newUser.tags.push(tag);
		this.setState({ user: newUser});
	}

	removeTag(tag){
		let tags = this.state.user.tags;
		function findTag(elem, tagToFind) {
		  return elem === tagToFind;
		}
		let index = tags.findIndex(findTag.bind(this, tag))
		console.log(index);
		let newTags = tags.splice(index, 1);
		console.log(newTags)
		this.setState({ user: {...this.state.user, tags}});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onSave(this.state.user);
	}

	tags(){
		let { tags } = this.props;
		return <SelectTag options={tags} value={this.state.user.tags} addTag={this.addTag.bind(this)} removeTag={this.removeTag.bind(this)}/>
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
								required
								style={ style.forminput }
								id="firstName"
								name="firstName"
								value={ user.firstName }
								onChange={ this.handleChange.bind(this) }/>
						</div>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="lastName">Nom</label>
							<input 
								required
								style={ style.forminput }
								id="lastName"
								name="lastName"
								value={ user.lastName }
								onChange={ this.handleChange.bind(this) }/>
						</div>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="phone">Téléphone</label>
							<input 
								required
								style={ style.forminput }
								id="phone"
								name="phone"
								value={ user.phone }
								onChange={ this.handleChange.bind(this) }/>
						</div>
					</div>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="tags">Associez des tags</label>
							{this.tags()}
						</div>
					</div>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="description">Description</label>
							<textarea 
								rows="5"
								style={ style.forminput }
								id="description"
								name="description"
								value={ user.description }
								onChange={ this.handleChange.bind(this) }>
							</textarea>
						</div>
					</div>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="avatar">Lien vers l'avatar</label>
							<input 
								style={ style.forminput }
								id="avatar"
								name="avatar"
								value={ user.avatar }
								onChange={ this.handleChange.bind(this) }/>
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
				border: '1px solid #efefef',
				marginBottom: 15,
				padding: 15,
				flexWrap: 'wrap',
			},
			formInputContainer: {
				display: 'flex',
				alignItems: 'center',
				flex: 1,
				margin: '10px',
				flexWrap: 'wrap',
			},
			forminput: {
				padding: 10,
				flex: 1,
				border: '1px solid #eee',
				flexWrap: 'wrap',
			},
			label: {
				marginRight: 10,
				color: '#666',
			}
		}
	}
}

export default ContactForm