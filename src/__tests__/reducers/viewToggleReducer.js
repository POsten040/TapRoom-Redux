import * as a from '../../actions/actions';
import viewToggleReducer from '../../reducers/viewToggleReducer';

describe('kegListReducer', () => {
  const currentState =  {
      splashPageVisible: true,
      kegFormVisible: false,
      kegListVisible: false,
      selectedKeg: null,
      editing: false
    }
  test('should toggle splash page visible', () => {
    const action = a.toggleSplashPage(currentState)
    expect(viewToggleReducer(currentState, action)).toEqual({
      splashPageVisible: false,
      kegFormVisible: true,
      kegListVisible: false,
      selectedKeg: null,
      editing: false
    })
  })
})