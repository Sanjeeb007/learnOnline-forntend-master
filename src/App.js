import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container} from 'reactstrap';
import Login from './Components/Login';
import Booked from './Components/Booked';
import Showbooklist from './Components/Showbooklist';
import SingleBooklist from './Components/SingleBooklist';
import Header from './Components/Header';
import Register from './Components/Register';
import Slide from './Components/Slide';
import UserNavbar from './Components/UserNavbar';
import Footer from './Components/FooterPage';
import Home from './Components/Home';
import AddComment from './Components/AddComment';
import Comment from './Components/Comment';
import Car from './Components/Car';
import Course from './Components/Course';
import AdminNavbar from './Components/AdminNavbar';
import AdminHome from './Components/AdminHome';
import Addcar from './Components/Addcar';
import Booking from './Components/Booking';
import Courseone from './Components/Courseone';
import UserHome from './Components/UserHome';
import User from './Components/User';
import UserProfile from './Components/UserProfile';

const App = () => {
return (
<div>
<Container>
      <BrowserRouter>
        <Switch>
          <Route path='/header' component={Header} />
          <Route path='/viewuser' component={User} />
          <Route path='/userhome' component={UserHome} />
          <Route path='/userprofile' component={UserProfile} />
          <Route exact path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/slide' component={Slide} /> 
          <Route path='/viewcard' component={Car} />  
          <Route path='/viewcourse' component={Course} />    
          <Route path='/courseone' component={Courseone} />
          <Route path='/booked/:id' component={Booked} />
          <Route path='/booklist' component={Booking} />
          <Route path='/addcomment' component={AddComment} />
          <Route path='/viewcomment' component={Comment} />  
          <Route path='/singlebook' component={SingleBooklist} />
          <Route path='/viewbook' component={Showbooklist} />
          <Route path='/adminnavbar' component={AdminNavbar} />
          <Route path='/adminhome' component={AdminHome} />
          <Route path='/addcar' component={Addcar} /> 
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
