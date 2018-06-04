import React, { Component } from 'react';
import SelectTag from './SelectTag';
import faker from 'faker';
import style from '..style/contactForm'
import PropTypes from 'prop-types';

const blankUser = {
	id: faker.internet.password(),
	name: '',
	company: '',
	email: '',
	hireable: false,
	avatar: 'https://placeimg.com/200/200/people',
	githubName: '',
	tags: []
};

class ContactForm extends Component{

	constructor(){
		super()
		this.state = { user: { ...blankUser } };
	}

	handleClose(){
		this.props.setView('home');
	}

	handleChange(e){
		let updateUser = { ...this.state.user };
		let { value, name } = e.target;
		updateUser[name] =  name === 'tags' ? [value] : value;
		console.log(updateUser.hireable);
		this.setState({ user: updateUser });
	}

	addTag(tag){
		let newUser = this.state.user;
		newUser.tags.push(tag);
		this.setState({ user: newUser});
	}

	removeTag(tag){
		// Find tag in list
		let tags = this.state.user.tags;
		function findTag(elem, tagToFind) {
		  return elem === tagToFind;
		};
		let index = tags.findIndex(findTag.bind(this, tag));
		// Remove tag
		let newTags = tags.splice(index, 1);
		console.log(newTags);
		this.setState({ user: {...this.state.user, tags}});
	}

	handleSubmit(e){
		e.preventDefault();
		let { user } = this.state;
		// IF no avatar use a generated one
		user.avatar ? false : user.avatar = 'https://placeimg.com/200/200/people?q=' + new Date();
		this.props.onSave(user);
	}

	tags(){
		let { tags } = this.props;
		return <SelectTag 
			options={tags} 
			value={this.state.user.tags} 
			addTag={this.addTag.bind(this)} 
			removeTag={this.removeTag.bind(this)}/>;
	}

	render(){
		let { user } = this.state;
		return(
			<div style={style.container}>
			<h1 style={style.title}>Créer un nouveau contact</h1>
				<form  style={ style.form } onSubmit = { this.handleSubmit.bind(this) }>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="githubName">Nom github</label>
							<input 
								style={ style.forminput }
								id="githubName"
								name="githubName"
								value={ user.githubName }
								onChange={ this.handleChange.bind(this) }/>
						</div>
					</div>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="name">Nom</label>
							<input 
								style={ style.forminput }
								id="name"
								name="name"
								value={ user.name }
								onChange={ this.handleChange.bind(this) }/>
						</div>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="company">Entreprise</label>
							<input 
								style={ style.forminput }
								id="company"
								name="company"
								value={ user.company }
								onChange={ this.handleChange.bind(this) }/>
						</div>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="email">Email</label>
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
							<div><label style={ style.label } htmlFor="tags">Associez des tags</label></div>
							{this.tags()}
						</div>
					</div>
					<div style={ style.formInputs }>
						<div 
							style={ style.buttonCancel } 
							onClick={ this.handleClose.bind(this) }>Annuler</div>
						<div 
							style={ style.buttonConfirm } 
							onClick={ this.handleSubmit.bind(this) }>Sauver</div>

					</div>
				</form>
			</div>
		);
	}
}

ContactForm.propTypes = {
	user: PropTypes.object,
	tags: PropTypes.array,
	onSave: PropTypes.func,
}

export default ContactForm