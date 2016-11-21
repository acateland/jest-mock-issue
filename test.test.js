import tested from './tested';
import mocked from './mocked';

const send = jest.fn();
jest.mock('./mocked', () => (
	jest.fn(() => 42)
));

describe('pathToServer', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should call smartWebsocket on FLOWDESIGNER.CONNECT command', () => {
		expect(tested()).toEqual(42);
	});
});