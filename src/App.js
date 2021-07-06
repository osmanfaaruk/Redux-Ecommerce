import './App.css';
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
import {Provider} from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>

    <Router>
      <Navbar/>
      <Switch>
      <Route path="/orderedItem">
        <OrderedItem/>
      </Route>
      <Route path="/productDetails/:id"> 
        <CardDetails/>
      </Route>
      <Route path="/" exact component={Home} />
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
