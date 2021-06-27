import { render, fireEvent } from '@testing-library/react';
import { SelectProfileContainer } from '../../containers/profiles';

jest.mock('react-router-dom');

describe('<Profiles />', () => {
	it('renders the <Profiles />', () => {
		const user = { displayName: 'Karl', photoURL: 'profile.png' };
		const setProfile = jest.fn(); //mock a function
		const { getByTestId } = render(
			<SelectProfileContainer user={user} setProflie={setProfile} />
		);

		fireEvent.click(getByTestId('user-profile'));
		expect(setProfile).toHaveBeenCalled();
	});
});
