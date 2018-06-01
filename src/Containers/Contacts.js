import React, { Component } from 'react';
import data from '../data.js';
import ContactList from '../Components/ContactList'
import ContactForm from '../Components/ContactForm';

class Contacts extends Component {
	constructor(){
		super();
		this.state = {
			contactList: data.contacts,
			tags: data.tags,
			activeView: 'new',
		};
	}

	componentDidMount(){
		console.log(this.state)
	}

	setView(name){
		this.setState({activeView: name})
	}

	leftColumn(){
		return(
			<div>
				<ContactList contacts={this.state.contactList} onToggleContactNew={this.setView.bind(this)} />
			</div>
		)
	}

	rightColumn(){
		switch (this.state.activeView) {
			case "new":
				return (
				<div style={{ maxWidth: 960, margin: 'auto' }}>
					<ContactForm setView={this.setView.bind(this)}/>
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
			<div style={ style.container }>
				<div style={ style.leftColumn }> {this.leftColumn()} </div>
				<div style={ style.rightColumn }> {this.rightColumn()} </div>

			</div>
		)
	}

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1
			},
			leftColumn: {
				flex: 1
			},
			rightColumn: {
				flex: 4
			}
		};
	}
}

export default Contacts