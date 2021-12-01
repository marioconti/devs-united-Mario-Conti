import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as _signOut,
} from "firebase/auth";
import { auth } from "./Firebase";

// Este va a ser el que nos va a proveer la data
const provider = new GoogleAuthProvider();

// Generador de popup para logearnos
export const signIn = async () => {
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    return userCredentials.user;
    // FIXME: porque ponemos el .user?
  } catch (err) {
    console.log(err.message);
  }
};

export const signOut = async () => {
  await _signOut(auth);
};

export const handleAuthChange = async (callback) => {
  //la funcion onAuthStateChanged se fija si hay cambios en el estado del Auth (si está autenticado o no)
  const unSubscribe = onAuthStateChanged(auth, callback);
  return unSubscribe;
};

// // =========================================
// // AUTENTICATION WITH EMAIL AND PASSWORD
// import { Auth } from "./Firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

// // FX LOGIN
// export const createUser = async (email, pass) => {
//   try {
//     const usersData = await createUserWithEmailAndPassword(Auth, email, pass);
//     console.log(usersData);
//     return usersData.user;
//   } catch (err) {
//     console.log(err);
//   }
// };
// // FX SING UP
// export const signIn = async (email, pass) => {
//   try {
//     const usersData = await signInWithEmailAndPassword(Auth, email, pass);
//     console.log(usersData);
//     return usersData.user;
//   } catch (err) {
//     console.log(err);
//   }
// };
// // FX LOGOUT
// export const logout = async () => {
//   try {
//     await signOut(Auth);
//   } catch (err) {
//     console.log(err);
//   }
// };
// // =====================================================
