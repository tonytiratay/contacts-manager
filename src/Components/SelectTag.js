import React, { Component } from 'react';
import { difference } from 'lodash';

const filterSelected = (options, value) => {
	let result = difference(options, value);
	return result;
};

class SelectTag extends Component {

	addTag(tag){
		this.props.addTag(tag);
	}

	removeTag(tag){
		this.props.removeTag(tag);
	}

	selected(){
		return (
			<div style={this.style().selector}>
				{ this.props.value.map((tag)=>{
				return (
					<div  style={this.style().selected} key={tag} onClick={ this.removeTag.bind(this, tag) }>
						{tag}
					</div>
				)
			}) }
			</div>
		);
	}

	selectable(){
		return (
			<div style={this.style().selector} >
				{ filterSelected(this.props.options, this.props.value).map((tag)=>{
					return (
						<div style={this.style().selectable} key={tag} onClick={ this.addTag.bind(this, tag) }>
							{tag}
						</div>
					)
				})
				}
			</div>
		);
	}

	render(){
		let style = this.style()
		return (
			<div style={style.container}>
				{ this.selectable() }
				{ this.selected() }
			</div>
		);
	}

	style(){
		return {
			container: {
				display: 'flex',
				flex: 1,
				flexWrap: 'wrap',
			},
			selector: {
				flex: 1,
				margin: 10,
				padding: 10,
				border: '1px solid #efefef',
				minHeight: 170,
				minWidth: 250,
			},
			selectable: {
				flex: 1,
				cursor: 'pointer',
				padding: 5,
			},
			selected: {
				flex: 1,
				padding: 6,
				borderLeft: '3px solid #bdf2ae',
				cursor: 'pointer',
			},
		};
	}
}

export default SelectTag;