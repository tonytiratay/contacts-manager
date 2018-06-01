import React, { Component } from 'react';

class Contactitem extends Component {

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1,
				background: '#ececec',
			},
			image: {
				width: '120px',
				height: '120px'
			},
			userInfo: {},
			firstName: {},
			lastName: {}
		}
	}

	render(){
		const { contact } = this.props;
		return(
			<div style={this.style().container}>
				<div style={this.style().image}></div>
				<div className="userInfo">
					<h3>{`${contact.firstName}`}</h3>
					<h3>{`${contact.lastName}`}</h3>
				</div>
				
			</div>
		)
	}
}

export default Contactitem