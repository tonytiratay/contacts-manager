import React, { Component } from 'react';
import SelectTag from './SelectTag';

let isEven = (num) => {
	return num % 2 === 0
};

const grey = "#efefef";

class ContactDetailView extends Component {

	handleEdit(e){
		e.preventDefault();
		let { name, value } = e.target;
		this.props.handleEditUserInfo({ [name]: value })
	}

	tags(){
		let { tags, user } = this.props;
		return <SelectTag options={tags} value={user.tags} addTag={this.addTag.bind(this)} removeTag={this.removeTag.bind(this)}/>
	}

	addTag(tag){
		let newUser = this.props.user;
		this.props.handleEditUserInfo({ tags: [...newUser.tags, tag] })
	}

	removeTag(tag){
		let tags = this.props.user.tags;
		function findTag(elem, tagToFind) {
		  return elem === tagToFind;
		}
		let index = tags.findIndex(findTag.bind(this, tag));
		let newTags = [...tags];
		newTags.splice(index, 1);
		this.props.handleEditUserInfo({ tags: newTags });
	}

	render(){
		let { user } = this.props;
		if (user) {
			let { name, avatar, company, email, githubName, hireable, tags } = this.props.user;
			let style = this.style();
			return (
				<div style={style.container}>
					<div style={style.userContainer}>
						<div style={style.imageContainer}>
							<div style={{...style.image, backgroundImage: `url(${avatar})`}}></div>
						</div>
						<div style={style.userInfo}>
							<div>
								<input 
									style={style.inputName} 
									type="text" 
									name="name"
									onChange={this.handleEdit.bind(this)}
									value={name}/>
							</div>
							<div><b>Travail chez: </b>
								<input 
									style={style.inputCompany} 
									type="text" 
									name="company"
									onChange={this.handleEdit.bind(this)}
									value={company}/>
							</div>
							<div><b>Adresse mail: </b>
								<input 
									style={style.inputCompany} 
									type="text" 
									name="email"
									onChange={this.handleEdit.bind(this)}
									value={email}/>
							</div>
							<div><b>ProfilGithub: </b>
								<input 
									style={style.inputCompany} 
									type="text" 
									name="githubName"
									onChange={this.handleEdit.bind(this)}
									value={githubName || 'non renseigné'}/>
							</div>
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
			)
		} else {
			return <div>Pas d'utilisateur à afficher</div>
		}
	}

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1,
				padding: 20,
				alignItems: 'flex-start',
				justifyItems: 'flex-start',
				flexDirection: 'column',
			},
			userContainer: {
				display: 'flex',
				alignItems: 'flex-start',
				justifyItems: 'flex-start',
			},
			infos: {
				flex: 1, display: 'flex',
				marginTop: 20,

			},
			imageContainer: {
				display: 'flex',
				marginLeft: '10px',
				marginRight: '10px',
			},
			image: {
				width: '100px',
				height: '100px',
				alignSelf: 'center',
				backgroundSize: 'cover',
				borderRadius: '50%',
				border: isEven(this.props.index) ? '2px solid #fff' : '2px solid ' + grey,
			},
			userInfo: {
				marginLeft: '10px',
				alignSelf: 'center',
			},
			name: {
				fontSize: '30px',
				color: "#333",
				fontWeight: '300',
				marginRight: 10,
			},
			inputName: {
				fontSize: '30px',
				color: "#333",
				fontWeight: '300',
				border: 'none',
			},
			inputCompany: {
				border: 'none',
				fontSize: 14,
			},
			company: {
				lineHeight: 2,
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
				flexDirection: 'column',
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

export default ContactDetailView;