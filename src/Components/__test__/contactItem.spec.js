import React from 'react';
import renderer from 'react-test-renderer';

import ContactItem from '../ContactItem';

it('Should render correctly', ()=>{

	const contact = {
		avatar: 'http://avatarurl.com/pic.jpg',
		name: 'JohnDoe',
		company: 'Leikir',
	};

	const tree = renderer
		.create(<ContactItem contact={contact} index={0} onClick={()=>{}}/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
})