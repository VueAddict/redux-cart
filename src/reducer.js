import ACTIONS from "./actions";

import cartItems from "./cart-items";

const { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT} = ACTIONS;

let tempCart = [];


const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 3,
  };

export function reducer(state = initialStore, action) {
  switch (action.type) {

    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE:
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: tempCart };

    case TOGGLE_AMOUNT: 
    return {...state, cart: state.cart.map(item => {
        if(item.id === action.payload.id) {
           item = {...item, amount: (action.payload.toggle === 'inc' ? item.amount + 1 : item.amount - 1)}
        }
        return item
    })}


    case GET_TOTALS:
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {amount, price} = cartItem
            cartTotal.amount += amount
            cartTotal.total += price * amount
            return cartTotal
        }, {total: 0, amount: 0}) 

        total = parseFloat(total.toFixed(2))
        return {...state, total, amount}

    default:
      return state;
  }
}
