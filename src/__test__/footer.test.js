import { render } from '@testing-library/react';
import { Footer } from '../components';

describe('<Footer />', () => {
	it('renders the <Footer /> with populated Data', () => {
		const { container, getByText } = render(
			<Footer>
				<Footer.Title>Question? Contact us</Footer.Title>
				<Footer.Break />
				<Footer.Row>
					<Footer.Column>
						<Footer.Link href='#'>FAQ</Footer.Link>
						<Footer.Link href='#'>Investor Relations</Footer.Link>
						<Footer.Link href='#'>Ways to Watch</Footer.Link>
						<Footer.Link href='#'>Corporate Informate</Footer.Link>
						<Footer.Link href='#'>Neflix Originals</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Link href='#'>Help Center</Footer.Link>
						<Footer.Link href='#'>Jobs</Footer.Link>
						<Footer.Link href='#'>Terms of Use</Footer.Link>
						<Footer.Link href='#'>Contact Us</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Link href='#'>Account</Footer.Link>
						<Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
						<Footer.Link href='#'>Privacy</Footer.Link>
						<Footer.Link href='#'>Speed Test</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Link href='#'>Media Center</Footer.Link>
						<Footer.Link href='#'>Buy Gift Cards</Footer.Link>
						<Footer.Link href='#'>Cookie Preferences</Footer.Link>
						<Footer.Link href='#'>Legal Notices</Footer.Link>
					</Footer.Column>
				</Footer.Row>
				<Footer.Break />
				<Footer.Text>Neflix United Kingdom</Footer.Text>
			</Footer>
		);

		expect(getByText('Question? Contact us')).toBeTruthy();
		expect(getByText('FAQ')).toBeTruthy();
		expect(getByText('Investor Relations')).toBeTruthy();
		expect(getByText('Corporate Informate')).toBeTruthy();
		expect(getByText('Neflix Originals')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
