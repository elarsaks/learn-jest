import {Utils} from '../app/Utils'
// Test suite
describe.skip('First suite', () => {

	beforeEach(() => {
		console.log('before each');
	})

	beforeAll(() => {
		console.log('before all');
	})

	/** Next comment will get function treated as it would be covered by unit test. */
	/* istanbul ignore next */
	test('First test', () => {
		const result = Utils.toUpperCase('abc');
		expect(result).toBe('ABC');
	});

	test('Parse simple URl', () => {
		const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
		expect(parsedUrl.href).toBe('http://localhost:8080/login');
		expect(parsedUrl.port).toBe('8080');
		expect(parsedUrl.protocol).toBe('http:');
		expect(parsedUrl.query).toEqual({});
	});

	test('Parse URL with query', () => {
		const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
		const expectedQuery = {
			user: 'user',
			password: 'pass'
		}
		expect(parsedUrl.query).toEqual(expectedQuery);
		expect(expectedQuery).toBe(expectedQuery);
	})
});

//test.todo('Todo test');

describe('Url-s test suite', () => {

	test('Test invalid URL', () => {
		function expectError() {
			Utils.parseUrl('')
		}
		expect(expectError).toThrowError('Empty url!');
	});

	test('Test invalid URL with arrow function', () => {
		expect(() => {
			Utils.parseUrl('')
		}).toThrow('Empty url');
	})

	test.only('Test invalid URL with try catch function', () => {
		try {
			Utils.parseUrl('')
		} catch (error){
			expect(error).toBeInstanceOf(Error);
			expect(error).toHaveProperty('message', 'Empty url!');
		}
	})

})