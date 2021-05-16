import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInPage from './pages/signinpage/signinpage.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path ="/checkout" component={CheckoutPage} />
        <Route exact path ="/signin" component={SignInPage} />
      </Switch>
      
    </div>
  );
}

export default App;
