import { db } from "../firebase-config";

import { collection, getDoc, getDocs } from "firebase/firestore";

const bookCollectionReference = collection(db, "books");

export const bookService = {
  getAllBooks: () => {
    return getDocs(bookCollectionReference);
  },
};
