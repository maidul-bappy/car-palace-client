import React, { useState } from "react";
import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import AddProducts from './components/AddProducts/AddProducts';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Logo from './images/logo.png';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div className="container">
      <Router>
        <div>
          <Navbar  expand="lg">
            <Navbar.Brand href="/"> <img src={Logo} alt=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
                {loggedInUser.isSignedIn ? <img src={loggedInUser.photo} alt="" className="roundedStyle"/> : <Button href="/login">Login</Button>}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Orders/>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/addProducts">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/product/:id">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
