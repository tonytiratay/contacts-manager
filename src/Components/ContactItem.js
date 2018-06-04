import React, { Component } from 'react';
import style from '../style/contactItem';
import PropTypes from 'prop-types';

const isEven = num =>  num % 2 === 0;
const grey = "#efefef";

class Contactitem extends Component {

	render(){
		const { contact } = this.props;
		return(
			<div style={{ ...style.container, background: isEven(this.props.index) ? '#555' : '#444', }}>
				<div style={{ ...style.userContainer, background: isEven(this.props.index) ? '#555' : '#444', }} 
					 onClick={this.props.onClick}>

					<div style={style.imageContainer}>
						<div style={{ ...style.image, 
							backgroundImage: `url(${contact.avatar})`, 
							border: isEven(this.props.index) ? '2px solid #fff' : '2px solid ' + grey,}}>
						</div>
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
}

Contactitem.propTypes = {
	contact: PropTypes.object,
}

export default Contactitem