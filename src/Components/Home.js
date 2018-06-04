import React, { Component } from 'react';
import style from '../style/home';

class Home extends Component {
	render(){
		return (
			<div style={ style.container }>
				<div>
					<div style={{ textAlign: 'center'}}> 
						<img 
							style={style.image} 
							src="/github-jedi.jpg" 
							alt="Github Jedi Caracter"/>
					</div>
					<h1 style={ style.title }>Gérez tous vos contacts Github</h1>
				</div>
			</div>
		);
	}
}

export default Home