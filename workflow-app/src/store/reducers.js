import { SHOW_LOGOUT, HIDE_LOGOUT } from "./actions";

const initialState = {
  showLogoutButton: false,
  showLoginPage: true
}

const showLogoutButton = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGOUT:
      return {
        showLogoutButton: action.payload.showLogoutButton
      }
    case HIDE_LOGOUT:
      return {
        showLogoutButton: action.payload.hideLogoutButton,
        showLoginPage: action.payload.showLoginPage
      }
    default:
      return state;
  }
}

export default showLogoutButton;
