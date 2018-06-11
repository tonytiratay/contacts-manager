import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import faker from 'faker';

import style from '../style/contacts';
import data from '../data.js';

import ContactList from '../Components/ContactList'
import ContactDetailView from '../Components/ContactDetailView';
import Home from '../Components/Home';

import { filter } from 'lodash'


class Contacts extends Component {
	constructor(){
		super();
		this.state = {
			contactList: data.contacts,
			tags: data.tags,
			filteredArray: data.contacts,
			activeView: 'home',
			userSelected: false,
			filter: '',
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
			tags: [],

		}
	}

	setView(name){
		this.setState({activeView: name});
	}

	saveUser(user){
		let { contactList } = this.state;
		contactList.push(user);
		this.setState({
			contactList,
			filteredArray: contactList,
			userSelected: user,
			activeView: 'view'
		});
		this.changeFilter('');
	}

	handleContactClick(user){
		this.setState({
			userSelected: user,
			activeView: 'view'
		});
	}

	changeFilter(value){
		let { contactList } = this.state;
		let newArr = filter(contactList, (elem)=>{
			return elem.name.toUpperCase().includes(value.toUpperCase());
		});
		this.setState({ filter: value, filteredArray: newArr }) 
		
	}

	leftColumn(){
		return(
			<div style={{ display: 'flex', flex: 1, }}>
				<ContactList 
					filter= {this.state.filter}
					changeFilter={this.changeFilter.bind(this)}
					contacts={this.state.filteredArray} 
					onToggleContactNew={this.setView.bind(this)} 
					onClick={this.handleContactClick.bind(this)}/>
			</div>
		);
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
		this.setState({ contactList: newContactList, filteredArray: newContactList });
		this.changeFilter('');
	}

	deleteContact(id){
		let { contactList } = this.state;
		// Find contact to delete in contact list
		function findContact(id, elem) {
		  return elem.id === id;
		};
		let index = contactList.findIndex(findContact.bind(this, id));
		// Remove contact
		let newContacts = contactList;
		newContacts.splice(index, 1);
		this.setState({ contactList: newContacts, filteredArray: newContacts, activeView: 'home', userSelected: false });
		this.changeFilter('');
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
		return(
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
				<header style={style.header}>
		          <img 
		          	style={style.cursor} 
		          	src={logo} 
		          	className="App-logo" 
		          	alt="logo" 
		          	onClick={this.setView.bind(this, 'home')}/>
		          <h1 
		          	style={style.cursor} 
		          	className="App-title" 
		          	onClick={this.setView.bind(this, 'home')}> GITHUB<br/>CONTACT MANAGER </h1>
		        </header>
		        <div style={ style.container }>
					<div style={ style.leftColumn }> {this.leftColumn()} </div>
					<div style={ style.rightColumn }> {this.rightColumn()} </div>
				</div>
			</div>
		);
	}
}

export default Contacts