import {LoginHandler} from "../../app/Handlers/LoginHandler"
import { HTTP_METHODS, HTTP_CODES } from "../../app/Models/ServerModels";
import {Utils} from '../../app/Utils/Utils'

describe('LoginHandler test suite', () => {
	let loginHandler: LoginHandler;

	const requestMock = {
		method: ''
	};
	const responseMock = {
		writeHead: jest.fn()
	};
	const AuthorizerMock = {};
	const getRequestBodyMock = jest.fn()

	beforeEach(() => {
		loginHandler = new LoginHandler(
			requestMock as any,
			responseMock as any,
			AuthorizerMock as any,
		)
		Utils.getRequestBody = getRequestBodyMock;
	})
	afterEach(() => jest.clearAllMocks())

	test('options request', async () => {
		requestMock.method = HTTP_METHODS.OPTIONS;

		await loginHandler.handleRequest();
		expect(responseMock.writeHead).toBeCalledWith(HTTP_CODES.OK)
	})

	test('Not handled http method', async () => {
		requestMock.method = 'someRandomMethod';
		await loginHandler.handleRequest();
		expect(responseMock.writeHead).not.toHaveBeenCalled();
	})

	test('post request with valid login', async () => {
		getRequestBodyMock.mockReturnValueOnce({
			username: 'someUser',
			password: 'password'
		});
	})


});