import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { db } from "../../data/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuthContext } from "../../data/auth.js";
import "../../style/PostJob.css";

const PostJobForm = () => {
  //page changing start
  const { user } = useAuthContext();
  const [page, setPage] = useState(1);
  const onNext = (e) => {
    e.preventDefault();
    setPage((page) => page + 1);
  };

  const onBack = (e) => {
    e.preventDefault();
    setPage((page) => page - 1);
  };
  //page changing end

  //field input states start

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [fullName, setFullName] = useState("");
  const [phNo, setPhNo] = useState("");
  const [email, setEmail] = useState("");

  const [loc, setLoc] = useState("");
  const [sal, setSal] = useState("");
  const [dura, setDura] = useState("");
  const [dead, setDead] = useState("");
  const [type, setType] = useState("");
  //field input states end

  const [success, setSuccess] = useState(false);
  //onSubmit

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      jobName: name,
      Description: desc,
      FullName: fullName,
      PhoneNo: phNo,
      Email: email,
      location: loc,
      Deadline: dead,
      Duration: dura,
      Salary: sal,
      type: type,
      userId: user.uid,
    };

    const jobColRef = collection(db, "postedJobs");
    const userColRef = doc(db, "users", user.uid);
    try {
      addDoc(jobColRef, data).then(
        (value) => {
          // console.log(value.data());
          updateDoc(userColRef, {
            array: arrayUnion(value.id),
          });
        },
        setSuccess(true),
        setDead(""),
        setTitle(""),
        setDesc(""),
        setName(""),
        setPhNo(""),
        setDura(""),
        setSal(""),
        setFullName(""),
        setLoc(""),
        setPage(1),
        setEmail(""),
        setType("")
      );

      navigate("/postJob");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      style={{ color: "--txt-color", backgroundColor: "white" }}
      onSubmit={handleSubmit}
      className="jobForm"
    >
      {success && <Alert severity="success">Job succesfully posted</Alert>}
      {page !== 1 && (
        <Button
          className="CTC1 back"
          type="submit"
          variant="contained"
          sx={{ width: "auto" }}
          onClick={onBack}
        >
          <ArrowBack />
        </Button>
      )}
      {page === 1 && (
        <FirstStep
          title={title}
          onTitleChange={setTitle}
          name={name}
          onNameChange={setName}
          desc={desc}
          onDescChange={setDesc}
        />
      )}
      {page === 2 && (
        <SecondStep
          fullName={fullName}
          onFullChange={setFullName}
          phNo={phNo}
          onPhChange={setPhNo}
          email={email}
          onEmailChange={setEmail}
        />
      )}
      {page === 3 && (
        <ThirdStep
          loc={loc}
          onLocChange={setLoc}
          dura={dura}
          onDuraChange={setDura}
          dead={dead}
          onDeadChange={setDead}
          sal={sal}
          onSalChange={setSal}
          type={type}
          onTypeChange={setType}
        />
      )}
      {page !== 3 && (
        <Button
          className="CTC1"
          variant="contained"
          sx={{ width: "100px" }}
          onClick={onNext}
        >
          Next
        </Button>
      )}
      {page === 3 && (
        <Button
          className="CTC1"
          type="submit"
          variant="contained"
          sx={{ width: "100px" }}
        >
          Submit
        </Button>
      )}
    </form>
  );
};

export default PostJobForm;
