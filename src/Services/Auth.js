import { Auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// FX LOGIN
export const createUser = async (email, pass) => {
  try {
    const usersData = await createUserWithEmailAndPassword(Auth, email, pass);
    console.log(usersData);
    return usersData.user;
  } catch (err) {
    console.log(err);
  }
};
// FX SING UP
export const signIn = async (email, pass) => {
  try {
    const usersData = await signInWithEmailAndPassword(Auth, email, pass);
    console.log(usersData);
    return usersData.user;
  } catch (err) {
    console.log(err);
  }
};
// FX LOGOUT
export const logout = async () => {
  try {
    await signOut(Auth);
  } catch (err) {
    console.log(err);
  }
};
