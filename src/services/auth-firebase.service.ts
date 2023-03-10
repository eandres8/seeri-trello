import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { authFire } from "@/firebase/config";

export class AuthFirebase {
  static async login(username: string, password: string) {
    return signInWithEmailAndPassword(authFire, username, password).then(
      (userCredentials) => {
        const user = userCredentials.user;

        return {
          uid: user.uid,
          email: user.email ?? username,
          token: (user as any).accessToken,
        };
      }
    );
  }
  
  static async register(username: string, password: string) {
    return createUserWithEmailAndPassword(authFire, username, password).then(
      (userCredentials) => {
        const user = userCredentials.user;

        return {
          uid: user.uid,
          email: user.email ?? username,
          token: (user as any).accessToken,
        };
      }
    );
  }
}
