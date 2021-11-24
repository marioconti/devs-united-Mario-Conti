import { db } from "./Firebase";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const getDocument = (coll, id) => doc(db, coll, id); //aquí se realiza un return implicito
export const getCollection = (coll) => collection(db, coll);

// // UPDATE DATA
export const upDate = async (coll, id, data) => {
  // referencia al documentos
  const docRef = getDocument(coll, id);
  // Metodo upadate acepta dos parametros 1 ref a un doc y la data
  await updateDoc(docRef, data);
};

// // DELETE DATA
export const deleteData = async (coll, id) => {
  const docRef = getDocument(coll, id);
  await deleteDoc(docRef);
};

// ADD DATA
// Agrega data a la collection
export const addData = async (coll, data) => {
  const collectionRef = getCollection(coll);
  const docRef = await addDoc(collectionRef, data);
  return docRef;
};
