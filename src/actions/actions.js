import * as c from './actionTypes';

export const toggleSplashPage = (viewBools) => {
  const {splashPageVisible, kegFormVisible, kegListVisible, editing} = viewBools;
  return {
    type:c.TOGGLE_SPLASH_PAGE,
    splashPageVisible,
    kegFormVisible,
    kegListVisible,
    editing
  };
}

export const addKeg = (kegToAdd) => {
  const {name, brand, price, flavor, pintsLeft, id} = kegToAdd;
  return {
    type: c.ADD_KEG,
    name,
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
  const {name, brand, price, flavor, pintsLeft, id} = kegToStock;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    flavor,
    pintsLeft: pintsLeft + 1,
    id
  }
}

export const sellKeg = (kegToSell) => {
  const {name, brand, price, flavor, pintsLeft, id} = kegToSell;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    flavor,
    pintsLeft: pintsLeft - 1,
    id
  }
}