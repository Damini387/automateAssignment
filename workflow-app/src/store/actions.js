export const SHOW_LOGOUT = 'SHOW_LOGOUT' // action types
export const HIDE_LOGOUT = 'HIDE_LOGOUT' // action types

export const showLogout = (showLogoutButton) => ( {
   type: SHOW_LOGOUT,
   payload: {
      showLogoutButton
   }
} );

export const hideLogout = (hideLogoutButton) => ( {
   type: HIDE_LOGOUT,
   payload: {
      hideLogoutButton
   }
} );
