import * as c from '../actions/actionTypes';

export default (state ={}, action) => {
  const {splashPageVisible, kegFormVisible, kegListVisible, editing} = action;
  switch (action.type) {
    case c.TOGGLE_SPLASH_PAGE:
      return Object.assign({}, state, {
        "viewState":{
        splashPageVisible: !splashPageVisible,
        kegFormVisible: !kegFormVisible,
        kegListVisible,
        editing
        }
      });
    default: 
      return state;
  }
};