import {BrowserRouter as Router} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages'
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import {useAuthListener } from './hooks'

function App() {
  const {user} = useAuthListener();
  
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
      <ProtectedRoute
        exact
        user={user}
        path={ROUTES.BROWSE}
      >
        <Browse />
      </ProtectedRoute> 
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME} 
        exact
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;
