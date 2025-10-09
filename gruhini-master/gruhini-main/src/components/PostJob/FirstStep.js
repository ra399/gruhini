import React from "react";
import "../../style/PostJob.css";

export default function FirstStep({
  title,
  onTitleChange,
  name,
  onNameChange,
  desc,
  onDescChange,
}) {
  return (
    <div className="content">
      <div className="field">
        <div>
          <label htmlFor="input">Job Title</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onTitleChange(e.target.value)}
            value={title}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Company Name</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onNameChange(e.target.value)}
            value={name}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Job Description</label>
        </div>
        <div>
          <textarea
            required
            type="text"
            onChange={(e) => onDescChange(e.target.value)}
            value={desc}
          />
        </div>
      </div>
    </div>
  );
}
