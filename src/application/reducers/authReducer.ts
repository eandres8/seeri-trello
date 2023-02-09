import { useReducer } from 'react';

import { AuthState, AuthActionType } from '../types/auth.types';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  email: '',
  uid: '',
  token: ''
};

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case '[AUTH] INIT_AUTHENTICATED':
      return { ...state, ...action.payload, isAuthenticated: true };

    case '[AUTH] LOGOUT':
      return { ...initialAuthState };
  
    default:
      return state;
  }
}

export const useAuthReducer = () => {
  return useReducer(authReducer, initialAuthState);
}
