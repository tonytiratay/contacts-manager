import React, { Component } from 'react';

let isEven = (num) => {
	return num % 2 === 0
};

const grey = "#efefef";

class Contactitem extends Component {

	render(){
		const { contact } = this.props;
		let style =  this.style();
		return(
			<div style={style.container}>
				<div style={style.userContainer} onClick={this.props.onClick}>
					<div style={style.imageContainer}>
						<div style={{...style.image, backgroundImage: `url(${contact.avatar})`}}></div>
					</div>
					<div style={style.userInfo}>
						<h3 style={style.firstName}>{contact.firstName}</h3>
						<h3 style={style.lastName}>{contact.lastName}</h3>
					</div>
				</div>
			</div>
		)
	}

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1,
				background: isEven(this.props.index) ? grey : '#fff',
			},
			userContainer: {
				display: 'flex',
				flex: 1,
				background: isEven(this.props.index) ? grey : '#fff',
				cursor: 'pointer'
			},
			imageContainer: {
				display: 'flex',
				marginLeft: '10px',
			},
			image: {
				width: '50px',
				height: '50px',
				alignSelf: 'center',
				backgroundSize: 'cover',
				borderRadius: '50%',
				border: isEven(this.props.index) ? '2px solid #fff' : '2px solid ' + grey,
			},
			userInfo: {
				marginLeft: '10px',
				justifySelf: 'center',
			},
			firstName: {
				fontSize: '15px',
				color: "#333",
				marginBottom: '-15px',
				fontWeight: '600',
			},
			lastName: {
				fontSize: '18px',
				color: "#333",
				fontWeight: '300',
			}
		}
	}
}

export default Contactitem