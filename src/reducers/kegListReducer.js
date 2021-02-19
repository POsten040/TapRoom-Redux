import * as c from './../actions/actionTypes';

export default (state ={}, action) => {
  const {name, brand, price, flavor, pintsLeft, id} = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
      [id]: {
        name,
        brand,
        price,
        flavor,
        pintsLeft,
        id
      }
    })
    case c.DELETE_KEG:
      const newState = {...state};
      delete newState[id];
      return newState;
    default: 
      return state;
  }
};