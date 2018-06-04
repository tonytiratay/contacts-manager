import React, { Component } from 'react';
import { difference } from 'lodash';
import style from '../style/selectTag';
import PropTypes from 'prop-types';

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
			<div style={style.selector}>
				{ this.props.value.map((tag)=>{
				return (
					<div  style={style.selected} key={tag} onClick={ this.removeTag.bind(this, tag) }>
						{tag}
					</div>
				)
			}) }
			</div>
		);
	}

	selectable(){
		return (
			<div style={style.selector} >
				{ filterSelected(this.props.options, this.props.value).map((tag)=>{
					return (
						<div style={style.selectable} key={tag} onClick={ this.addTag.bind(this, tag) }>
							{tag}
						</div>
					)
				})
				}
			</div>
		);
	}

	render(){
		return (
			<div style={style.container}>
				{ this.selectable() }
				{ this.selected() }
			</div>
		);
	}
}

SelectTag.propTypes = {
	options: PropTypes.array,
	value: PropTypes.array,
	addTag: PropTypes.func,
	removeTag: PropTypes.func,
}

export default SelectTag;