import React from "react";
import "../../style/PostJob.css";
import { storage } from "../../data/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { getDownloadURL } from "firebase/storage";

export default function FirstStep({
  name,
  onNameChange,
  desc,
  onDescChange,
  cost,
  onCostChange,
  image,
  onImageChange,
  sdesc,
  onSdescChange,
}) {
  const [img, setImg] = useState(null);
  const handleChange = (e) => {
    onImageChange(e.target.value);
    setImg(e.target.files[0]);
    console.log(e.target.value, " ", `images/${e.target.value}`);
    const metadata = {
      contentType: "image/jpeg",
    };
    let storageRef = ref(storage, `images/${e.target.value}`);

    // uploadBytes(storageRef, img, metadata).then((snapshot) => {
    //   console.log(snapshot);

    const uploadTask = uploadBytesResumable(storageRef, img, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        let x = document.getElementById("display");
        console.log(snapshot);
        console.log(progress);
        if (snapshot.bytesTransferred === 0) {
          x.innerHTML = `<p>Upload Failed, please upload again</p>`;
        } else {
          x.innerHTML = `<p>Upload is ${Math.round(progress)}% done</p>`;

          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        }
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          onImageChange(downloadURL);
        });
      }
    );
  };

  return (
    <div className="content">
      <div className="field">
        <div>
          <label htmlFor="input">Service Name</label>
        </div>
        <div>
          <input
            className="nme-class"
            required
            type="text"
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Short Description</label>
        </div>
        <div>
          <input
            required
            type="search"
            onChange={(e) => onSdescChange(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Service Description</label>
        </div>
        <div>
          <textarea
            required
            type="text"
            onChange={(e) => onDescChange(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Upload Image</label>
        </div>
        <div class="custom-file">
          <input type="file" onChange={handleChange}></input>
        </div>
        <div id="display"></div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Service Cost</label>
        </div>
        <div>
          <input
            className="cst-class"
            required
            type="number"
            onChange={(e) => onCostChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
