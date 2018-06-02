import React, { Component } from 'react';

let isEven = (num) => {
	return num % 2 === 0
};

const grey = "#efefef";

class ContactDetailView extends Component {
	render(){
		let { user } = this.props;
		if (user) {
			let { name, avatar, phone, description, tags } = user;
			let style = this.style();
			return (
				<div style={style.container}>
					<div style={style.userContainer}>
						<div style={style.imageContainer}>
							<div style={{...style.image, backgroundImage: `url(${avatar})`}}></div>
						</div>
						<div style={style.userInfo}>
							<span style={style.name}>{name}</span>
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
			},
			userContainer: {
				display: 'flex',
				flex: 1,
				maxWidth: 700,
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
				alignSelf: 'center',
			},
			name: {
				fontSize: '30px',
				color: "#333",
				fontWeight: '300',
				marginRight: 10,
			},
		}
	}
}

export default ContactDetailView;