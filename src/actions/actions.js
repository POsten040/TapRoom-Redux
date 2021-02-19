import * as c from './actionTypes';

export const addKeg = (kegToAdd) => {
  const {brand, price, flavor, pintsLeft, id} = kegToAdd;
  return {
    type: c.ADD_KEG,
    brand,
    price,
    flavor,
    pintsLeft,
    id
  }
}

export const deleteKeg = id => {
  return {
    type: c.DELETE_KEG,
    id,
  }
}