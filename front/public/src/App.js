import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import SignIn from "./components/auth/SingIn";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
