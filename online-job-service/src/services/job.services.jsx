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

const jobCollectionRef = collection(db, "jobs");

export const jobServices = {
  getAllJobs: () => {
    const queryRef = query(jobCollectionRef, orderBy("timestamp", "desc"));
    return getDocs(queryRef);
  },
};
