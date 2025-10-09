import React from "react";
import Grid from "@mui/material/Grid";
import "../../style/App.css";
import "../../style/Empower.css";

function QuoteImg() {
  return (
    <div className="quote-img">
      <Grid item md={4} lg={4}>
        <img
          src={require("../../assets/woman.png")}
          alt="woman"
          height="90%"
          style={{
            position: "fixed",
            zIndex: "-1",
            right: "-10px",
            bottom: "0px",
          }}
        />
      </Grid>
      <Grid sx={{mt:11}} item xs={12} sm={12} md={12} lg={12}>
        <p style={{fontSize: "20px"}}>
          We at Gruhini, believe that empowerment begins with independence and
          every woman should be self-dependent in any and every aspect of life.
        </p>
        <p className="mt-2" style={{fontSize: "25px"}}>Learn how to :</p>
      </Grid>
    </div>
  );
}
export default QuoteImg;
