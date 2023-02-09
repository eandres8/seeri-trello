import { AuthFirebase } from '@/services/auth-firebase.service';
import { UIFacade } from '../types/ui.types';
import { useAuthReducer } from '../reducers/authReducer';

export const useAuthFacade = (ui: UIFacade) => {
  const [state, dispatch] = useAuthReducer();

  const doRegister = async (username: string, password: string) => {
    let success = false;
    try {
      ui.startLoading();
      const result = await AuthFirebase.register(username, password);
      dispatch({ type: '[AUTH] INIT_AUTHENTICATED', payload: result });
      success = true;
    } catch (error) {
      // TODO: create error message toast
      console.log({ error });
    } finally {
      ui.finishLoading();
    }

    return success;
  }

  const doSignIn = async (username: string, password: string) => {
    let success = false;
    try {
      ui.startLoading();
      const result = await AuthFirebase.login(username, password);
      dispatch({ type: '[AUTH] INIT_AUTHENTICATED', payload: result });
      success = true;
    } catch (error) {
      // TODO: create error message toast
      console.log({ error });
    } finally {
      ui.finishLoading();
    }

    return success;
  }

  const doSignOut = () => {
    dispatch({ type: '[AUTH] LOGOUT' })
  }

  return {
    authState: state,
    doRegister,
    doSignIn,
    doSignOut,
  }
}