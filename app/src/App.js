import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInPage from './pages/signinpage/signinpage.component';

import Header from './components/header/header.component';

import { firestoreDb } from './firebase/firebase.utils';

import { setShopData } from './redux/shop/shop.actions';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firestoreDb.collection("collections")
    .get()
    .then((querySnapshot) => this.props.setShopData(querySnapshot))
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

  render() {
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
  
}

const mapDispatchToProps = dispatch => ({
  setShopData: (data) => dispatch(setShopData(data))
});

export default connect(null, mapDispatchToProps)(App);
