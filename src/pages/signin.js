import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';
	const handleSignin = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	};
	// check for input elements are valid
	//email & password
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error data-testid='error'>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignin} method='POST'>
						<Form.Input
							placeholder='Email address'
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type='password'
							autoComplete='off'
							placeholder='Password'
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit
							data-testid='sign-in'
							disabled={isInvalid}
							type='submit'
						>
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Neflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
