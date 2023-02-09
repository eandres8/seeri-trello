import { useReducer } from 'react';

import { UIState, UIActionType } from '../types/ui.types';

export const initialUIState: UIState = {
  isLoading: false,
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch(action.type) {
    case '[UI] START_LOADING':
      return { ...state, isLoading: true };
    
    case '[UI] FINISH_LOADING':
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export const useUIReducer = () => {
  return useReducer(uiReducer, initialUIState);
}