import { db } from "../firebase-config";

import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  orderBy,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";

const jobCollectionRef = collection(db, "jobs");

export const jobServices = {
  getAllJobs: () => {
    const queryRef = query(jobCollectionRef, orderBy("timestamp", "desc"));
    return getDocs(queryRef);
  },
  getJobById: (jobId) => {
    const docRef = doc(jobCollectionRef, jobId);
    return getDoc(docRef);
  },
  addJob: (newJob) => {
    return addDoc(jobCollectionRef, newJob);
  },
  deleteJob: (jobIid) => {
    return deleteDoc(doc(jobCollectionRef, jobIid));
  },
};
