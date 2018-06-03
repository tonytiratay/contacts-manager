import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import data from '../data.js';
import ContactList from '../Components/ContactList'
import ContactForm from '../Components/ContactForm';
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

	rightColumn(){
		switch (this.state.activeView) {
			case "new":
				return (
					<div style={{ display: 'flex', flex: 1, }}>
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
				<header style={style.header} onClick={this.setView.bind(this, 'home')}>
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">GITHUB<br/>CONTACT MANAGER</h1>
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
				height: '100%',
				overflowY: 'scroll',
			},
			rightColumn: {
				display: 'flex',
				flex: 1,
				minWidth: 250,
				height: '100%',
				overflowY: 'scroll',
			}
		};
	}
}

export default Contacts