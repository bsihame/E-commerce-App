import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './components/HomePage/HomePage';
import ShopPage from "./components/Shop/ShopPage"
import  Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
