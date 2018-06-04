import React, { Component } from 'react';

const isEven = num =>  num % 2 === 0;
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
						<div style={style.nameContainer}>
							<h3 style={style.name}>{contact.name}</h3>
							<h3 style={style.company}>{contact.company}</h3>
						</div>
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
				padding: 10,
				background: isEven(this.props.index) ? '#555' : '#444',
				alignItems: 'center',
			},
			userContainer: {
				display: 'flex',
				flex: 1,
				background: isEven(this.props.index) ? '#555' : '#444',
				cursor: 'pointer',
			},
			imageContainer: {
				display: 'flex',
				marginLeft: '5px',
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
				flex: 1,
				marginLeft: '10px',
				alignItems: 'center',
				color: '#ddd',
			},
			nameContainer: {
				flex: 1,
			},
			name: {
				fontSize: '18px',
				fontWeight: '300',
				marginBottom: -10,
			},
			company: {
				fontSize: '14px',
				fontWeight: '300',
			},
		};
	}
}

export default Contactitem