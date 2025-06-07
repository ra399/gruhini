import * as React from "react";
import Cards from "./components/BuyProduct/CardSnippet";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import "./style/Filter.css";
import "./style/BuyProduct.css";
import search from "./assets/search.png";
import gruhini from "./assets/gruhini_of_the_month.png";

const drawerWidth = 240;

function ResponsiveDrawer() {
  return (
    <div className="ms-4 me-5">
      <Navbar />
      <div className="mt-5">
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <div className="row">
              <div className="col-9">
                <form class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="city-search"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Search "
                    autocomplete="off"
                    // value={filter}
                    // onChange={searchText.bind(this)}
                  />
                  <button
                    class="button"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <img src={search} alt="search button" width="30px" />
                  </button>
                </form>
                <Cards />
              </div>
              <div className="col-3 small-display-none text-center txt">
                <div className="ps-5 mt-4">
                  <h2 className="tri-color">
                    Hire a housewife, encourage them
                  </h2>
                  <br />
                  We at gruhini want to provide an opportunity for all those
                  ambitius housewives whho wants to express their skills and
                  grow in their career.
                  <br />
                  <br />
                  <h3 className="text-decoration-underline">
                    Gruhini of the Month
                  </h3>
                  <img
                    className="rounded mt-3 border"
                    src={gruhini}
                    alt={"Gruhini"}
                  />
                  <h3 className="mt-3">Roshni Upadhyay</h3>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default ResponsiveDrawer;
