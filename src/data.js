import faker from 'faker';

const contacts = [
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "John Doef",
		hireable: true,
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=a',
		tags: [],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Arthur Durdêtrebébé",
		hireable: true,
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=efa',
		tags: [],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Phill Atayli",
		hireable: true,
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=arth',
		tags: [],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Jennyfer Harpacé",
		hireable: true,
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=ac',
		tags: [],
	},
	{
		createdAt: new Date(),
		id: faker.internet.password(),
		company: 'Leikir ' + faker.company.companyName() ,
		name: "Tony Stwarébidon",
		hireable: true,
		email: 'monmail@me.com',
		githubName: false,
		avatar: 'https://placeimg.com/200/200/people?q=asa',
		tags: [],
	},
];

let generateContacts = ()=> {
	let contact = ()=>{
		return {
			createdAt: new Date(),
			id: faker.internet.password(),
			company: faker.company.companyName(),
			name: faker.name.firstName() + ' ' + faker.name.lastName(),
			hireable: true,
			email: faker.internet.email(),
			githubName: false,
			avatar: 'https://placeimg.com/100/100/people?q=' + faker.name.firstName(),
			tags: [],
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