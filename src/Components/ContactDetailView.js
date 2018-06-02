import React, { Component } from 'react';

let isEven = (num) => {
	return num % 2 === 0
};

const grey = "#efefef";

class ContactDetailView extends Component {
	render(){
		let { user } = this.props;
		if (user) {
			let { firstName, lastName, avatar, phone, description, tags } = user;
			let style = this.style();
			return (
				<div style={style.container}>
					<div style={style.userContainer}>
						<div style={style.imageContainer}>
							<div style={{...style.image, backgroundImage: `url(${avatar})`}}></div>
						</div>
						<div style={style.userInfo}>
							<span style={style.firstName}>{firstName}</span>
							<span style={style.lastName}>{lastName}</span>
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
				background: isEven(this.props.index) ? grey : '#fff',
			},
			userContainer: {
				display: 'flex',
				flex: 1,
				maxWidth: 700,
				justifyContent: 'center',
			},
			imageContainer: {
				display: 'flex',
				marginLeft: '10px',
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
				justifySelf: 'center',
				alignSelf: 'center',
			},
			firstName: {
				fontSize: '30px',
				color: "#333",
				marginBottom: '-15px',
				fontWeight: '600',
				marginRight: 10,
			},
			lastName: {
				fontSize: '36px',
				color: "#333",
				fontWeight: '300',
			}
		}
	}
}

export default ContactDetailView;