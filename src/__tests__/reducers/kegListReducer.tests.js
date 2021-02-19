import kegListReducer from '../../reducers/kegListReducer';
import * as a from '../../actions/actions';

describe('kegListReducer', () => {
  let action;
  const currentState = {
    1: {
      name: 'kevin',
      brand: 'BrewMaster',
      price: 100,
      flavor: 'good',
      pintsLeft: 120,
      id: 1
    },
    2: {
      name: 'kevin',
      brand: 'MasterBrew',
      price: 10,
      flavor: 'beer',
      pintsLeft: 1,
      id: 2
    }
  }
  const kegData = {
    name: 'kevin',
    brand: 'BrewMaster',
    price: 100,
    flavor: 'High Octane',
    pintsLeft: 1,
    id: 3
  }
  test('should return default state if not passed any keg obejct', () => {
    expect(kegListReducer({}, {type:null})).toEqual({})
  });
  test('should add new keg to masterKegList', () => {
    action = a.addKeg(kegData)
    expect(kegListReducer({}, action)).toEqual({
      3:kegData
    })
  })
  test('should edit an exisitng keg in masterKegList', () => {
    action = a.addKeg({
      name: 'CHANGED NAME',
      brand: 'BrewMaster',
      price: 100,
      flavor: 'High Octane',
      pintsLeft: 1,
      id: 2
    })
    expect(kegListReducer(currentState, action)).toEqual({
      1: {
        name: 'kevin',
        brand: 'BrewMaster',
        price: 100,
        flavor: 'good',
        pintsLeft: 120,
        id: 1
      },
      2: {
        name: 'CHANGED NAME',
        brand: 'BrewMaster',
        price: 100,
        flavor: 'High Octane',
        pintsLeft: 1,
        id: 2
      }
    })
  })
  test('should delete keg from masterKegList', () => {
    action = a.deleteKeg(1)
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'kevin',
        brand: 'MasterBrew',
        price: 10,
        flavor: 'beer',
        pintsLeft: 1,
        id: 2
      }
    })
  })
  test('should increase pintsLeft property of keg by 1', () => {
    action = a.stockKeg(kegData);
    expect(kegListReducer({}, action)).toEqual({
      [3]:{
        name: 'kevin',
        brand: 'BrewMaster',
        price: 100,
        flavor: 'High Octane',
        pintsLeft: 2,
        id: 3
      }
    })
  })
  test('should decrease pintsLeft property of keg by 1', () => {
    action = a.sellKeg(kegData);
    expect(kegListReducer({}, action)).toEqual({
      [3]:{
        name: 'kevin',
        brand: 'BrewMaster',
        price: 100,
        flavor: 'High Octane',
        pintsLeft: 0,
        id: 3
      }
    })
  })
});