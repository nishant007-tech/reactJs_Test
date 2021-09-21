import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Register from './components/register/register';
import Login from './components/login/login';
import AllUserDetail from './components/allusers/allUserDetail';



function App() {

  let user = localStorage.getItem("LoggedUser")


  return (
    <Router>
      {
        user ?
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/all_users" component={AllUserDetail} />
          </Switch>
          :
          <>
            <Redirect to="/" />
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
          </>

      }

    </Router>
  );
}

export default App;
