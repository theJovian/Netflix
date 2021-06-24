import { render } from '@testing-library/react';
import { Profiles } from '../components';

describe('<Profiles />', () => {
	it('renders the <Profiles /> with populated data', () => {
		const { container, getByText, getByTestId } = render(
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User onClick={() => {}}>
						<Profiles.Picture
							src='/images/karl.png'
							data-testid='profile-picture'
						/>
						<Profiles.Name>Karl Hadwen</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		);

		expect(getByText("Who's watching?")).toBeTruthy();
		expect(getByTestId('profile-picture')).toBeTruthy();
		expect(getByText('Karl Hadwen')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the <Profiles /> with populated data but misc profile image', () => {
		const { container, getByText, getByTestId } = render(
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User onClick={() => {}}>
						<Profiles.Picture
							src='/images/karl.png'
							data-testid='profile-picture-misc'
						/>
						<Profiles.Name>Karl Hadwen</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		);

		expect(getByText("Who's watching?")).toBeTruthy();
		expect(getByTestId('profile-picture-misc')).toBeTruthy();
		expect(getByText('Karl Hadwen')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
