import { db } from "../firebase-config";

import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

export const bookService = {
  getAllBooks: () => {
    return getDocs(bookCollectionRef);
  },
  addBook: (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  },
};
