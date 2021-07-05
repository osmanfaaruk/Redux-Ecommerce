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
import CardDetails from './components/CardDetails/CardDetails';
function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Router path="/orderedItem" exact component={OrderedItem}/>
      <Router path="/productDetails/:id" exact component={CardDetails}/>
    </Router>
  );
}

export default App;
