import * as c from './../actions/actionTypes';

export default (state ={}, action) => {
  const { brand, price, flavor, pintsLeft, id } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
      [id]: {
        brand,
        price,
        flavor,
        pintsLeft,
        id
      }
    })
    default: 
      return state;
  }
};