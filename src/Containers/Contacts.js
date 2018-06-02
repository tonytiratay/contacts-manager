import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import data from '../data.js';
import ContactList from '../Components/ContactList'
import ContactForm from '../Components/ContactForm';
import ContactDetailView from '../Components/ContactDetailView';

class Contacts extends Component {
	constructor(){
		super();
		this.state = {
			contactList: data.contacts,
			tags: data.tags,
			activeView: 'new',
			userSelected: false,
		};
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
			<div>
				<ContactList contacts={this.state.contactList} onToggleContactNew={this.setView.bind(this)} onClick={this.handleContactClick.bind(this)}/>
			</div>
		)
	}

	rightColumn(){
		switch (this.state.activeView) {
			case "new":
				return (
					<div style={{ maxWidth: 960, margin: 'auto' }}>
						<ContactForm setView={this.setView.bind(this)} tags={this.state.tags} onSave={this.saveUser.bind(this)}/>
					</div>
				)
			break;
			case "view":
				return (
					<div style={{ display: 'flex', flex: 1, }}>
						<ContactDetailView user={this.state.userSelected}/>
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
			<div>
				<header style={style.header}>
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">Contact Manager</h1>
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
				backgroundColor: '#18819b',
				height: '100px',
				padding: '20px',
				color: 'white',
				cursor: 'pointer',
			},
			container: {
				display: 'flex',
				flex: 1,
				flexWrap: 'wrap',
			},
			leftColumn: {
				flex: 1,
				minWidth: 250,
			},
			rightColumn: {
				flex: 4,
				minWidth: 250,
			}
		};
	}
}

export default Contacts