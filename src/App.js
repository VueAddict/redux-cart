import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
// import cartItems from "./cart-items";
// redux stuff

import { Provider } from "react-redux";

// redux store

import { createStore } from "redux";

// reducer
import { reducer } from "./reducer";

//initial store

// const initialStore = {
//   cart: cartItems,
//   total: 0,
//   amount: 3,
// };

// const store = createStore(reducer, initialStore);

const store = createStore(reducer);



function App() {
  // cart setup

  return (
    <Provider store={store}>
        <Navbar />
        <CartContainer />
    </Provider>
  );
}

export default App;
