import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';
import { Signin } from '../../pages';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	userHistory: () => ({}),
}));

const firebase = {
	auth: jest.fn(() => ({
		signInWithEmailAndPassword: jest.fn(() =>
			Promise.resolve('I am signed in!')
		),
	})),
};

describe('<Signin />', () => {
	it('renders the sign in page with a from submission', async () => {
		const { getByTestId, getByPlaceholderText, queryBytestId } = render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					<Signin />
				</FirebaseContext.Provider>
			</Router>
		);

		await act(async () => {
			await fireEvent.change(getByPlaceholderText('Email address'), {
				target: { value: 'karl@gmail.com' },
			});
			await fireEvent.change(getByPlaceholderText('Password'), {
				target: { value: 'password' },
			});
			fireEvent.click(getByTestId('sign-in'));

			expect(getByPlaceholderText('Email address').value).toBe(
				'karl@gmail.com'
			);
			expect(getByPlaceholderText('Password').value).toBe('password');
			expect(queryByTestId('error')).toBeFalsy();
		});
	});
});
