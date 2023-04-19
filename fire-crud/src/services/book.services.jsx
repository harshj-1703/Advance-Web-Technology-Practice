import { db } from "../firebase-config";

import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  orderBy,
  doc,
  query,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

export const bookService = {
  getAllBooks: () => {
    const queryRef = query(bookCollectionRef, orderBy("status", "desc"));
    return getDocs(queryRef);
  },
  addBook: (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  },
  deleteBook: (id) => {
    return deleteDoc(doc(bookCollectionRef, id));
  },
  updateBook: (id, newBook) => {
    const bookDocRef = doc(bookCollectionRef, id);
    return updateDoc(bookDocRef, newBook);
  },
};
