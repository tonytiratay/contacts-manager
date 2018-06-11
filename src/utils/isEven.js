export default (number) => {
	// If param is invalid, throw an ERROR
	if ( isNaN(number) || number === null || number === false ) {

		throw { 
				name: 'Not a number', 
				message: 'You must provide a number to the function but we received ' + number
			 }
			 
	} else {

		return number % 2 === 0;
	
	}  
};