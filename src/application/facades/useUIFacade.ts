import { useUIReducer } from '../reducers/uiReducer';

export const useUIFacade = () => {
  const [state, dispatch] = useUIReducer();

  const startLoading = () => {
    dispatch({ type: '[UI] START_LOADING' });
  }

  const finishLoading = () => {
    dispatch({ type: '[UI] FINISH_LOADING' })
  }

  return {
    uiState: state,
    startLoading,
    finishLoading,
  };
}