import { createContext } from 'react';

export const LoginContext = createContext(null);

export const initialState = {
  isLoggedIn: sessionStorage.getItem('access_token') || false,
  user: JSON.parse(sessionStorage.getItem('user')) || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      sessionStorage.setItem('user', JSON.stringify(action.user));
      sessionStorage.setItem('access_token', action.access_token);
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    }
    case 'LOGOUT': {
      sessionStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
};
