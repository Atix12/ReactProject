import './App.css';
import SocialBuilder from './components/SocialBuilder';
import { Route, Switch } from 'react-router';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path="/login" component={Login}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/' component={SocialBuilder}></Route>
      </Switch>
    </div>
  );
}

export default App;
