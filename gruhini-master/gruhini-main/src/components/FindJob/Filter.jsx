import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Slider from "./Slider";
import flower from "../../assets/bg-flower-smol.png";
import search from "../../assets/search.png";

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 300 }} role="presentation" className="filter">
      <div className="text-center mt-5 p-3 txt">
        <h2 className="txt">Filters</h2>
        <br />
        <div className="mb-3">
          Location
          <input
            className="mb-3 rounded border-1"
            type="text"
            value={props.locFilter}
            onChange={(e) => props.onLocSet(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          Categories
          <input
            className="mb-3 rounded border-1"
            type="text"
            value={props.catgfilter}
            onChange={(e) => props.onCatgSet(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          Desired Salary
          <Slider />
        </div>
        <div className="mb-3">
          Job Type
          <div className="border rounded p-2 mt-3 m-3 checkbox">
            <input
              className="ms-2 me-2 rounded"
              type="checkbox"
              checked={props.partTime}
              onChange={() => props.onPartTimeCheck(!props.partTime)}
            ></input>
            Part-Time &nbsp;
            <input
              className="ms-2 me-2 rounded"
              type="checkbox"
              checked={props.fullTime}
              onChange={() => props.onFullTimeCheck(!props.fullTime)}
            ></input>
            Full-Time
          </div>
        </div>
        <div className="mb-3 mt-5">
          <Button
            className="nav-btn-tri mt-3"
            variant="contained"
            sx={{ boxShadow: 0, bgcolor: "#97c1c8", marginRight: "15px" }}
            onClick={props.onSave}
          >
            Save
          </Button>
          <Button
            className="nav-btn-tri mt-3"
            variant="contained"
            sx={{ boxShadow: 0, bgcolor: "#97c1c8" }}
            onClick={toggleDrawer(anchor, false)}
          >
            Close
          </Button>
          <img
            src={flower}
            alt="flower"
            style={{
              height: "230px",
              // position: "fixed",
              // right: "10px",
              // zIndex: "-1",
              // bottom: "-40px",
            }}
          />
        </div>
      </div>
    </Box>
  );

  return (
    <span>
      <div className="row">
        <div className="col">
          <form action="" class="input-group">
            <input
              type="text"
              class="form-control"
              id="city-search"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search "
              autoComplete="off"
              value={props.searchText}
              onChange={props.onSearch}
            />
            <button class="button">
              <img src={search} width="30px" />
            </button>
          </form>
        </div>
        <div className="col mt-5 text-end">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                className="nav-btn-tri"
                variant="contained"
                sx={{ boxShadow: 0, bgcolor: "#97c1c8" }}
                onClick={toggleDrawer(anchor, true)}
              >
                Apply Filters
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                variant="persistent"
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </span>
  );
}
