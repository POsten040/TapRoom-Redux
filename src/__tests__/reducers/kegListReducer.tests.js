import kegListReducer from '../../reducers/kegListReducer';
import * as c from '../../actions/actionTypes';

describe("kegListReducer", () => {
  test('should return default state if not passed any keg obejct', () => {
    expect(kegListReducer({}, {type:null})).toEqual({})
  });
});