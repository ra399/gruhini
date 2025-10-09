import React from "react";
import Navbar from "./components/Navbar";
import PostJobForm from "./components/PostJob/PostJobForm";
import Grid from "@mui/material/Grid";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./data/firebase";
import { useAuthContext } from "./data/auth";
import { useEffect, useState } from "react";
import YourJobs from "./components/PostJob/YourJobs";

const PostJob = () => {
  const colRef = collection(db, "postedJobs");
  const [arr, setArr] = useState(null);
  const { user } = useAuthContext();
  // const [myJobs, setMyJobs] = useState([]);
  // const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setShow(!show);
  // };

  useEffect(() => {
    let temp = [];
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef)
      .then((doc) => {
        return doc.data().array;
      })
      .then((myJobs) => {
        myJobs.forEach((jid) => {
          getDoc(doc(colRef, jid)).then((snap) => {
            temp.push(snap.data());
          });
        });
      });
    setArr(temp);
    console.log(arr);
  }, []);

  return (
    <div className="postJob">
      <Navbar />
      <div className="mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="ps-5 postjobform" style={{ margin: "50px" }}>
              <PostJobForm />
            </div>
          </div>
          <div className="col-lg-6 postjobtext">
            <div className="text-center" style={{ margin: "50px" }}>
              <p className="textField" style={{ fontSize: "21px" }}>
                Post a Job and recruit easily!
              </p>
              <p style={{ fontSize: "18px" }}>
                Need staff? Spread the word among aspiring women employees and artisans via Gruhini. 
              </p>
            </div>
            {/* <p className='textField' style={{ fontSize: "21px"}}>Jobs posted by you</p> */}
            {arr ? <YourJobs arr={arr} /> : "You did not post any jobs"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
