import * as a from './../../actions/actions';
import * as c from './../../actions/actionTypes';

describe('TapRoom actions', () => {

  test('deleteKeg should create DELETE_KEG action', () => {
      expect(a.deleteKeg(1)).toEqual({
        type: c.DELETE_KEG,
        id: 1
    });
  });
  
  test('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({ 
      brand: 'MegaBeer', 
      price: '1000000', 
      flavor: '13:33', 
      pintsLeft: 120, 
      id: 1 
    }))
    .toEqual({
      type: c.ADD_KEG,
      brand: 'MegaBeer',
      price: '1000000',
      flavor: '13:33',
      pintsLeft: 120,
      id: 1
    });
  })
  test('toggleSplashPage should return the toggleSplashPage action', () => {
    const initialState = {
        viewState:{
        splashPageVisible: true,
        kegFormVisible: false,
        kegListVisible: false,
        editing: false
      }
    }
    expect(a.toggleSplashPage(initialState)).toEqual(
      {
        type:"TOGGLE_SPLASH_PAGE",
        splashPageVisible: true,
        kegFormVisible: false,
        kegListVisible: false,
        editing: false
    })
  })
});