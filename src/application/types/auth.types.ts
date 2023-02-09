export type AuthState = {
  isAuthenticated: boolean;
  email: string;
  uid: string;
  token: string;
};

export type AuthActionType =
  | { type: "[AUTH] INIT_AUTHENTICATED", payload: { email: string; uid: string; token: string; } }
  | { type: "[AUTH] LOGOUT" };

export type AuthFacade = {
  doRegister: (username: string, password: string) => Promise<void>;
  doSignIn: (username: string, password: string) => Promise<void>;
  authState: AuthState;
}