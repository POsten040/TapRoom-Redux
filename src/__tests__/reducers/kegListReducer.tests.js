import kegListReducer from '../../reducers/kegListReducer';
import * as c from '../../actions/actionTypes';

describe('kegListReducer', () => {
  let action;
  const currentState = {
    1: {
      brand: 'BrewMaster',
      price: 100,
      flavor: 'good',
      pintsLeft: 120,
      id: 1
    },
    2: {
      brand: 'MasterBrew',
      price: 10,
      flavor: 'beer',
      pintsLeft: 1,
      id: 2
    }
  }
  const KegData = {brand: 'BrewMaster',
    price: 100,
    flavor: 'High Octane',
    pintsLeft: 1,
    id: 3
  }
  test('should return default state if not passed any keg obejct', () => {
    expect(kegListReducer({}, {type:null})).toEqual({})
  });
  test('should add new keg to masterKegList', () => {
    const {brand, price, flavor, pintsLeft, id} = KegData;
    action = {
      type: c.ADD_KEG,
      brand,
      price,
      flavor,
      pintsLeft,
      id
      }
    expect(kegListReducer({}, action)).toEqual({
      3:{
        brand,
        price,
        flavor,
        pintsLeft,
        id
      }
    })
  })
});