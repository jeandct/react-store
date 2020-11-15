import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './components/Basket';
import Product from './components/Product';
import ProductsList from './components/ProductsList';
import Home from './components/Home.js';
import ProductsContextProvider from './contexts/ProductsContext';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <ProductsContextProvider>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/products' component={ProductsList}></Route>
            {/* <Route path='/products/:id' component={Product}></Route>
            <Route path='/basket' component={Basket}></Route> */}
          </ProductsContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
