import React from "react";
import Navbar from "./components/Navbar.jsx";
import QuoteImg from "./components/Empower/QuoteImg";
import Cardsnippet from "./components/Empower/Cardsnippet_Empower";
import Grid from "@mui/material/Grid";
import "./style/App.css";
import "./style/Empower.css";

export default function Empower() {
  return (
    <Grid sx={{ paddingRight: 40, paddingLeft: 10 }}>
      <Navbar />
      <div className="mt-5">
        <QuoteImg />
        <Cardsnippet />
      </div>
    </Grid>
  );
}
