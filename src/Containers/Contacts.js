import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import faker from 'faker';

import data from '../data.js';

import ContactList from '../Components/ContactList'
import ContactDetailView from '../Components/ContactDetailView';
import Home from '../Components/Home';


class Contacts extends Component {
	constructor(){
		super();
		this.state = {
			contactList: data.contacts,
			tags: data.tags,
			activeView: 'home',
			userSelected: false,
		};
	}

	blankUser(){
		return {
			id: faker.internet.password(),
			name: '',
			company: '',
			email: '',
			hireable: false,
			avatar: 'https://placeimg.com/200/200/people',
			githubName: '',
			tags: []
		}
	}

	setView(name){
		this.setState({activeView: name})
	}

	saveUser(user){
		let { contactList } = this.state;
		contactList.push(user)
		this.setState({
			contactList,
			userSelected: user,
			activeView: 'view'
		});
	}

	handleContactClick(user){
		this.setState({
			userSelected: user,
			activeView: 'view'
		});
	}

	leftColumn(){
		return(
			<div style={{ display: 'flex', flex: 1, }}>
				<ContactList contacts={this.state.contactList} onToggleContactNew={this.setView.bind(this)} onClick={this.handleContactClick.bind(this)}/>
			</div>
		)
	}

	handleEditUserInfo(userProps){
		let { userSelected, contactList } = this.state;
		// Merge new key / value from userProps in existing user
		let newUser = { ...userSelected, ...userProps };
		this.setState({ userSelected: newUser });
		// Find and replace old user in contact list
		let newContactList = contactList.map((c) => {
			return c.id === newUser.id ? newUser : c;
		});
		this.setState({ contactList: newContactList });
	}

	deleteContact(id){
		let { contactList } = this.state;
		// Find contact to delete in contact list
		function findContact(id, elem) {
		  return elem.id === id;
		}
		let index = contactList.findIndex(findContact.bind(this, id))
		// Remove contact
		let newContacts = contactList;
		newContacts.splice(index, 1);
		this.setState({ contactList: newContacts, activeView: 'home', userSelected: false });
	}

	rightColumn(){
		switch (this.state.activeView) {
			case "new":
				this.saveUser(this.blankUser());
				return (
					<div style={{ display: 'flex', flex: 1, }}>
						<ContactDetailView 
							user={this.state.userSelected} 
							deleteContact={this.deleteContact.bind(this)}
							handleEditUserInfo={this.handleEditUserInfo.bind(this)} 
							tags={this.state.tags}/>
					</div>
				)
			break;
			case "view":
				return (
					<div style={{ display: 'flex', flex: 1, }}>
						<ContactDetailView 
							user={this.state.userSelected} 
							deleteContact={this.deleteContact.bind(this)}
							handleEditUserInfo={this.handleEditUserInfo.bind(this)} 
							tags={this.state.tags}/>
					</div>
				)
			break;
			case "home":
				return (
					<div style={{ display: 'flex', flex: 1, }}>
						<Home/>
					</div>
				)
			break;
			default: 
        		return ( <div>Cliquez sur un contact</div> );
		}
	}

	render(){
		const style = this.style()
		return(
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
				<header style={style.header}>
		          <img style={style.cursor} src={logo} className="App-logo" alt="logo" onClick={this.setView.bind(this, 'home')}/>
		          <h1 style={style.cursor} className="App-title" onClick={this.setView.bind(this, 'home')}>GITHUB<br/>CONTACT MANAGER</h1>
		        </header>
		        <div style={ style.container }>
					<div style={ style.leftColumn }> {this.leftColumn()} </div>
					<div style={ style.rightColumn }> {this.rightColumn()} </div>
				</div>
			</div>
		)
	}

	style(){
		return {
			header: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#222',
				height: '100px',
				padding: '20px',
				color: 'white',
			},
			cursor: {
				cursor: 'pointer',
			},
			container: {
				display: 'flex',
				flex: 1,
				flexWrap: 'wrap',
			},
			leftColumn: {
				display: 'flex',
				flex: 1,
				minWidth: 250,
				background: '#333',
				overflowY: 'scroll',
			},
			rightColumn: {
				display: 'flex',
				flex: 1,
				overflowY: 'scroll',
				minWidth: 300,

			}
		};
	}
}

export default Contacts