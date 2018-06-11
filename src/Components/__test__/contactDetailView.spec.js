import React from 'react';
import renderer from 'react-test-renderer';

import ContactDetailView from '../ContactDetailView';

it('Should render correctly', ()=>{

	const user = {
		avatar: 'http://avatarurl.com/pic.jpg',
		name: 'JohnDoe',
		company: 'Leikir',
		tags: ['javascript', 'react'],
	};
	const tags=['javascript, meteor, redux, react, node, python'];

	const tree = renderer
		.create(<ContactDetailView user={user} tags={tags}/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
})