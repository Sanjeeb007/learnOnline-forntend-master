import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container} from 'reactstrap';
import Login from './Components/Login';
import Header from './Components/Header';
import Register from './Components/Register';
import Slide from './Components/Slide';
import UserNavbar from './Components/UserNavbar';
import Footer from './Components/FooterPage';
import Home from './Components/Home';
import Car from './Components/Car';
import Courseone from './Components/Courseone';
import UserHome from './Components/UserHome';
import User from './Components/User';

const App = () => {
return (
<div>
<Container>
      <BrowserRouter>
        <Switch>
          <Route path='/header' component={Header} />
          <Route path='/viewuser' component={User} />
          <Route path='/userhome' component={UserHome} />
          <Route exact path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/slide' component={Slide} /> 
          <Route path='/viewcard' component={Car} />    
          <Route path='/courseone' component={Courseone} />
          <Route path='/' component={Home} />
          <Route path='/usernavbar' component={UserNavbar} />
              
        </Switch>
      </BrowserRouter>
<Footer></Footer>
    </Container>
    
    
    </div>
 );
};



  export default App;