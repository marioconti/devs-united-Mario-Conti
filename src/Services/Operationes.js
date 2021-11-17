import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore/lite";

// getData
export async function getData(col) {
  const dataCollection = collection(db, col);
  const dataSanptshot = await getDocs(dataCollection);
  const dataList = dataSanptshot.docs.map((doc) => doc.data());
  return dataList;
}
