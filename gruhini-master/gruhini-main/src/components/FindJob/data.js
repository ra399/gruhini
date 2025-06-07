import {db} from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";
 //collection ref
 const colRef=collection(db,'postedJobs');
 //getting collection data
 let jobs=[];
 getDocs(colRef)
               .then((snapshot)=>{
                 snapshot.docs.forEach((doc)=>{
                   jobs.push({...doc.data(),id: doc.id})
                 })
               
               })
               .catch(err=>{
                 console.log(err.message);
               })
               console.log(jobs);
export default jobs;
