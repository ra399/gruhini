import { db } from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";
//collection ref
const colRef = collection(db, "sellProducts");
//getting collection data
let prods = [];
getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      prods.push({ ...doc.data(), id: doc.id });
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log(prods);
export default prods;
