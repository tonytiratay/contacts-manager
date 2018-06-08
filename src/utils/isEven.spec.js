import isEven from './isEven';

describe('IsEven function', ()=>{

	it('should not be even', ()=>{
		expect(isEven(3)).toBeFalsy();
	});

	it('should be even', ()=>{
		expect(isEven(4)).toBeTruthy();
	});
	
	it('should throw an error', ()=>{
		expect( () => isEven() ).toThrow('must provide a number');
	});

});
