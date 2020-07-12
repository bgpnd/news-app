import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Url from "./Url";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      // component utama
      <HashRouter>
        <>
        <Header/>
          <div className="container">
            <div className="container_box">
              <Route exact path="/url" component={Url}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
            </div>
          </div>
        <Footer/>
        </>
        </HashRouter>
    );
  }
}
 
export default App;