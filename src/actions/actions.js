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

export const stockKeg = (kegToStock) => {
  const {brand, price, flavor, pintsLeft, id} = kegToStock;
  return {
    type: c.ADD_KEG,
    brand,
    price,
    flavor,
    pintsLeft: 1,//pintsLeft + 1,
    id
  }
}

export const sellKeg = (kegToSell) => {
  const {brand, price, flavor, pintsLeft, id} = kegToSell;
  return {
    type: c.ADD_KEG,
    brand,
    price,
    flavor,
    pintsLeft: pintsLeft - 1,
    id
  }
}