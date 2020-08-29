import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
import profile from './components/picture/profile2.PNG'

function App() {
  return (
    <div className="App">
      
      <div class="title">
        <img src={profile} class="profile" alt="profile" />
        Nathan Doher        
      </div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
