import * as a from '../../actions/actions';
import viewToggleReducer from '../../reducers/viewToggleReducer';

describe('kegListReducer', () => {
  const currentState =  {
    viewState:{
      splashPageVisible: true,
      kegFormVisible: false,
      kegListVisible: false,
      editing: false
    }
  }
  test('should toggle splash page visible', () => {
    const action = a.toggleSplashPage(currentState)
    expect(viewToggleReducer(currentState, action)).toEqual({
      viewState:{
      splashPageVisible: false,
      kegFormVisible: true,
      kegListVisible: false,
      editing: false
      }
    })
  })
})