import faker from 'faker';

const contacts = [
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "John Doef",
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=a',
		tags: [ "javascript", "es6", "node" ],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Arthur Durdêtrebébé",
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=efa',
		tags: [ "javascript", "es6", "react" ],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Phill Atayli",
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=arth',
		tags: [ "python", "react" ],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Jennyfer Harpacé",
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=ac',
		tags: [ "javascript", "es6", "react", "node", "redux" ],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Tony Stwarébidon",
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=asa',
		tags: [ "java", "es6", "react" ],
	},
];

let generateContacts = ()=> {
	let contact = ()=>{
		return {
			createdAt: new Date(),
			id: faker.internet.password(),
			company: faker.company.companyName(),
			name: faker.name.firstName() + ' ' + faker.name.lastName(),
			email: faker.internet.email(),
			githubName: false,
			avatar: 'https://placeimg.com/100/100/people?q=' + faker.name.firstName(),
			tags: [ "javascript", "es6" ],
		};
	} 
	let fakeContacts = [];
	let i = 0;
	while (i<10) {
		fakeContacts.push(contact());
		i ++;
	}
	return fakeContacts;
};

const tags = ["javascript", "react", "redux", "node", "meteor", "es6", "java", "python"]

const data = {contacts: [...contacts, ...generateContacts()], tags};

export default data;