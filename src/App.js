import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About';
import Footer from './Footer';
import './App.css';
import Title from './Title';
import Form from './Form';



function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route exact path="/" component={Form}/>
        <Route path="/about" component={About} />
        {/* <Footer/> */}
      </div>

    </Router>
  );
}

export default App;
