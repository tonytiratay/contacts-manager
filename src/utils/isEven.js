export default (number) => {
	
	if (!isNaN(number)) {
		return number % 2 === 0;
	}  

	throw { name: 'Not a number', message: 'You must provide a number to the function'};
};