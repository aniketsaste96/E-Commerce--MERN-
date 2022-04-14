
import './App.css';
import Header from "./component/layout/Header/Header"
import { ReactNavbar } from "overlay-navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from "./component/Product/ProductDetails"

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <Router >
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/product/:id">
        <ProductDetails />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
