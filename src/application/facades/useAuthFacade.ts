import { AuthFirebase } from '@/services/auth-firebase.service';
import { UIFacade } from '../types/ui.types';
import { useAuthReducer } from '../reducers/authReducer';

export const useAuthFacade = (ui: UIFacade) => {
  const [state, dispatch] = useAuthReducer();

  const doRegister = async (username: string, password: string) => {
    try {
      ui.startLoading();
      const result = await AuthFirebase.register(username, password);
      dispatch({ type: '[AUTH] INIT_AUTHENTICATED', payload: result });
    } catch (error) {
      // TODO: create error message toast
      console.log({ error });
    } finally {
      ui.finishLoading();
    }
  }

  const doSignIn = async (username: string, password: string) => {
    try {
      ui.startLoading();
      const result = await AuthFirebase.login(username, password);
      dispatch({ type: '[AUTH] INIT_AUTHENTICATED', payload: result });
    } catch (error) {
      // TODO: create error message toast
      console.log({ error });
    } finally {
      ui.finishLoading();
    }
  }

  return {
    authState: state,
    doRegister,
    doSignIn,
  }
}