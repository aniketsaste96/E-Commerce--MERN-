
import './App.css';
import Header from "./component/layout/Header/Header"
import { ReactNavbar } from "overlay-navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from "./component/Product/ProductDetails"
import Products from "./component/Products/Products"
import Search from "./component/Products/Search"
import LoginSignUp from "./component/User/LoginSignUp"
import store from "./store"
import { loadUser } from "./actions/userAction"
import UserOptions from "./component/layout/Header/UserOptions"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile"
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    store.dispatch(loadUser)
  }, [])
  return (
    <Router >
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/product/:id">
        <ProductDetails />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path="/products/:keyword">
        <Products />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/login">
        <LoginSignUp />
      </Route>
      <Route exact path="/account">
        <Profile />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
