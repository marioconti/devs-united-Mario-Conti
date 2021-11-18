import { db } from "./Firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore/lite";

// getData
// export async function getData(col) {
//   const dataCollection = collection(db, col);
//   const dataSanptshot = await getDocs(dataCollection);
//   const dataList = dataSanptshot.docs.map((doc) => doc.data());
//   return dataList;
// }

export const getCollection = (coll) => {
  collection(db, coll);
};

export const getDocument = (coll, id) => {
  doc(db, coll, id);
};

export const upDate = async (coll, id, data) => {
  // referencia al documento
  const docRef = getDocument(coll, id);
  await updateDoc(docRef, data);
};

export const deleteData = async (coll, id) => {
  const docRef = getDocument(coll, id);
  await deleteDoc(docRef);
};

export const addData = async (coll, data) => {
  const collectionRef = getDocument(coll);
  const docRef = await addDoc(collectionRef, data);
  return docRef;
};
