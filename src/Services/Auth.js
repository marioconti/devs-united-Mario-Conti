import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as _signOut,
} from "firebase/auth";
import { auth } from "./Firebase";
import { setDoc } from "@firebase/firestore";
import { getDocument, getDataById } from "./Operationes";

// Proveedor de la data con logeo por google
const provider = new GoogleAuthProvider();

export const addUserToFirestore = async (user) => {
  const { uid, displayName, email, photoURL } = user;
  const docRef = getDocument("users", uid);

  // esto nos atrae el usuario para ver si esta en la base de datos?
  const userExist = await getDataById("users", uid);
  // si no está hacemos un setDoc con lo que queremos que tenga
  if (!userExist) {
    await setDoc(docRef, {
      email: email,
      name: displayName,
      photo: photoURL,
      uid,
    });
  }
};

// Generador de popUp para logearse
export const signIn = async () => {
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    addUserToFirestore(userCredentials.user);
    return userCredentials.user;
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
