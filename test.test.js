import tested from './tested';
import mocked from './mocked';

const send = jest.fn();
jest.mock('./mocked', () => (
	jest.fn(() => 42)
));

describe('mocke problem', () => {

	it('should return 42', () => {
		expect(tested()).toEqual(42);
	});

	it('still should return 42', () => {
		jest.resetAllMocks();
		expect(tested()).toEqual(42);
	});
});
