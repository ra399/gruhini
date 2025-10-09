import React from "react";
import "../../style/PostJob.css";

export default function ThirdStep({
  loc,
  sal,
  dura,
  dead,
  type,
  onLocChange,
  onDuraChange,
  onSalChange,
  onDeadChange,
  onTypeChange,
}) {
  return (
    <div className="content">
      <div className="field">
        <div>
          <label htmlFor="input">Location</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onLocChange(e.target.value)}
            value={loc}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Duration</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onDuraChange(e.target.value)}
            value={dura}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Set a Deadline to Apply</label>
        </div>
        <div>
          <input
            required
            type="date"
            onChange={(e) => onDeadChange(e.target.value)}
            value={dead}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Salary</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onSalChange(e.target.value)}
            value={sal}
          />
        </div>
      </div>

      <div className="field radio">
        <div>
          <label htmlFor="input">Type</label>
        </div>
        <div>
          <input
            name="type"
            required
            type="radio"
            onChange={(e) => onTypeChange(e.target.value)}
            value={"Part Time"}
          />{" "}
          <label style={{ marginLeft: "5px" }} htmlFor="part">
            Part Time
          </label>{" "}
        </div>
        <div>
          <input
            name="type"
            required
            type="radio"
            onChange={(e) => onTypeChange(e.target.value)}
            value={"Full Time"}
          />
          <label style={{ marginLeft: "8px" }} htmlFor="part">
            Full Time
          </label>
        </div>
      </div>
    </div>
  );
}
