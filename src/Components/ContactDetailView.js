import React, { Component } from 'react';
import SelectTag from './SelectTag';
import style from '../style/contactDetailView';
import PropTypes from 'prop-types';

const isEven = (num) => {
	return num % 2 === 0
};
const grey = "#efefef";

class ContactDetailView extends Component {

	handleEdit(e){
		e.preventDefault();
		let { name, value } = e.target;
		this.props.handleEditUserInfo({ [name]: value });
	}

	tags(){
		let { tags, user } = this.props;
		return <SelectTag options={tags} value={user.tags} addTag={this.addTag.bind(this)} removeTag={this.removeTag.bind(this)}/>;
	}

	addTag(tag){
		let newUser = this.props.user;
		this.props.handleEditUserInfo({ tags: [...newUser.tags, tag] });
	}

	deleteContact(contactId){
		return window.confirm("Êtes vous sur de vouloir effacer ce contact ?") ? this.props.deleteContact(contactId) : false;
	}

	removeTag(tag){
		let tags = this.props.user.tags;
		// Find tag index
		function findTag(elem, tagToFind) {
		  return elem === tagToFind;
		}
		let index = tags.findIndex(findTag.bind(this, tag));
		// Remove tag
		let newTags = [...tags];
		newTags.splice(index, 1);
		this.props.handleEditUserInfo({ tags: newTags });
	}

	render(){
		let { user } = this.props;
		if (user) {
			let { name, avatar, company, email, githubName, id } = this.props.user;
			return (
				<div style={style.container}>
					<div style={style.userContainer}>
						<div style={style.imageContainer}>
							<div style={{ ...style.image, 
								backgroundImage: `url(${avatar})`, 
								border: isEven(this.props.index) ? '2px solid #fff' : '2px solid ' + grey,}}>
							</div>
						</div>
						<div style={style.userInfo}>
							<div>
								<input 
									style={style.inputName} 
									type="text" 
									name="name"
									onChange={this.handleEdit.bind(this)}
									value={name || 'non renseigné'}/>
							</div>
							<div><b style={style.label}>Travail chez: </b>
								<input 
									style={style.inputCompany} 
									type="text" 
									name="company"
									onChange={this.handleEdit.bind(this)}
									value={company || 'non renseigné'}/>
							</div>
							<div><b style={style.label}>Adresse mail: </b>
								<input 
									style={style.inputCompany} 
									type="text" 
									name="email"
									onChange={this.handleEdit.bind(this)}
									value={email || 'non renseigné'}/>
							</div>
							<div><b style={style.label}>Profil Github: </b>
								<input 
									style={style.inputCompany} 
									type="text" 
									name="githubName"
									onChange={this.handleEdit.bind(this)}
									value={githubName || 'non renseigné'}/>
							</div>
						</div>
						<div style={style.delete}>
							<div style={ style.button} onClick={this.deleteContact.bind(this, id)}>Supprimer</div>
						</div>
					</div>
					<div style={style.infos}>
						<div style={ style.formInputs }>
							<div style={ style.formInputContainer }>
								<div><label style={ style.label } htmlFor="tags">Tags associés</label></div>
								{this.tags()}
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <div>Pas d'utilisateur à afficher</div>;
		}
	}
}

ContactDetailView.propTypes = {
	user: PropTypes.object,
	tags: PropTypes.array,
	handleEditUserInfo: PropTypes.func,
	deleteContact: PropTypes.func,
}

export default ContactDetailView;