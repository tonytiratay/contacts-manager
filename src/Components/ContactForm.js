import React, { Component } from 'react';
import SelectTag from './SelectTag';

const blankUser = {
	name: '',
	company: '',
	email: '',
	hireable: '',
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
							<label style={ style.label } htmlFor="tags">Associez des tags</label>
							{this.tags()}
						</div>
					</div>
					<div style={ style.formInputs }>
						<div style={ style.formInputContainer }>
							<label style={ style.label } htmlFor="hireable">Embauchable</label>
							<input 
								type="checkbox"
								required
								style={ style.forminput }
								id="hireable"
								name="hireable"
								value={ user.hireable }
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
				flex: 1,
				padding: 20
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