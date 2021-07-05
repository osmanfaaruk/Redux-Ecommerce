import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import OrderedItem from './components/OrderedItem/OrderedItem';
function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Router path="/orderedItem" component={OrderedItem}/>
    </Router>
  );
}

export default App;
