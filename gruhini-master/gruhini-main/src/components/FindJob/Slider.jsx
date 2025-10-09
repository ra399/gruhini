import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 25,
    label: "2500",
  },
  {
    value: 50,
    label: "5000",
  },
  {
    value: 75,
    label: "7500",
  },
  {
    value: 100,
    label: "10000",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderMarks() {
  return (
    <div className="d-flex justify-content-center">
      <Box sx={{ width: 200 }}>
        <Slider
          className="slider"
          aria-label="Custom marks"
          defaultValue={200}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="off"
          marks={marks}
          //   color="secondary"
        />
      </Box>
    </div>
  );
}
