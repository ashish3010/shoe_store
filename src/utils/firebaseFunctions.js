import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { fireStore } from "./firebaseConfig";

export const saveItem = async (data, table, document) => {
  await setDoc(doc(fireStore, table, document), data,
    { merge: true }
  );
}

export const getItems = async (table) => {
  const items = await getDocs(query(collection(fireStore, table), orderBy('id', 'desc',)));
  return items.docs.map((doc) => doc.data())
}

export const getSingleData = (table = '', document = '', setData) => {
  const docRef = doc(fireStore, table, document);
  onSnapshot(docRef, (doc) => {
    if (setData) {
      setData(doc.data())
    } else {
      return doc.data()
    }
  })
}
// export const getOneData = async (table = '', document = '') => {
//   const docRef = doc(fireStore, `${table}/${document}/`);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.data())
// }