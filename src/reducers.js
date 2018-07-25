import {combineReducers} from 'redux';

const TeamMembers = (state = [], action) => {
  switch (action.type) {
    case "ADD_TEAM_MEMBER":
      return [
        ...state, {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          mobile: action.mobile,
          role: action.role
        }
      ];
    case "EDIT_TEAM_MEMBER":
      var newState = state.map(m => {
        if (m.id === action.id) {
          m.firstName = action.firstName;
          m.lastName = action.lastName;
          m.email = action.email;
          m.mobile = action.mobile;
          m.role = action.role;
        }
        return m;
      });
      return newState;
    default:
      return state;
  }
}

export default combineReducers({TeamMembers});
