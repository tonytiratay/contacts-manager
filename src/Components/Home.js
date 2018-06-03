import React, { Component } from 'react';

class Home extends Component {
	render(){
		let style = this.style();
		return (
			<div style={ style.container }>
				<div>
					<div style={{ textAlign: 'center'}}> 
						<img style={style.image} src="/github-jedi.jpg" alt="Github Jedi Caracter"/>
					</div>
					<h1 style={ style.title }>Manage all your Github contacts</h1>
				</div>
			</div>
		)
	}

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			},
			title: {
				fontWeight: 300,
				color: '#444',
			},
			image: {
				maxWidth: 350,
				justifySelf: 'center',
			}
		}
	}
}

export default Home