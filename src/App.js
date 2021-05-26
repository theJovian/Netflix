import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages'
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

function App() {
  const user = {};
  return (
    <Router>
      <IsUserRedirect 
        exact 
        path={ROUTES.SIGN_IN}
        loggedInPath={ROUTES.BROWSE}
        user={user}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect 
        exact 
        path={ROUTES.SIGN_UP}
        loggedInPath={ROUTES.BROWSE}
        user={user}
      >
        <Signup />
      </IsUserRedirect>  
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>   
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>   
    </Router>
  );
}

export default App;
