import isEven from './isEven';

describe('IsEven function', ()=>{

	it('should not be even', ()=>{
		expect(isEven(3)).toEqual(false)
	});

	it('should be even', ()=>{
		expect(isEven(4)).toEqual(true)
	});
	
	it('should throw an error', ()=>{
		expect(()=>{
			isEven('Not a number paramter');
		}).toThrow()
	});

});
