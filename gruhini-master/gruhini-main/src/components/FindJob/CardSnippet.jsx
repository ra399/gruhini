import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Star from "./Star";
import "../../style/FindJob.css";
import data from "./data";
import Filter from "./Filter";
import Popup from "./Popup";

export default function CardSnippet() {
  const [arr, setarray] = useState(data);
  const [locFilter, setlocFilter] = useState("");
  const [catgfilter, setcatgfilter] = useState("");
  const [isParttimeselected, setPartTime] = useState(false);
  const [isFulltimeselected, setFullTime] = useState(false);

  const handleFilters = () => {
    let data1 = [];
    const l = data.length;
    console.log(l);
    if (locFilter == "" && catgfilter == "") {
      data1 = data;
    } else if (locFilter != "" && catgfilter == "") {
      for (let i = 0; i < l; i++) {
        if (
          data[i].location.toString().toLowerCase() ==
          locFilter.toString().toLowerCase()
        )
          data1.push(data[i]);
      }
    } else if (locFilter == "" && catgfilter != "") {
      for (let i = 0; i < l; i++) {
        if (
          data[i].jobName.toString().toLowerCase() ==
          catgfilter.toString().toLowerCase()
        )
          data1.push(data[i]);
      }
    } else if (locFilter != "" && catgfilter != "") {
      for (let i = 0; i < l; i++) {
        if (
          data[i].location.toString().toLowerCase() ==
            locFilter.toString().toLowerCase() &&
          data[i].jobName.toString().toLowerCase() ==
            catgfilter.toString().toLowerCase()
        )
          data1.push(data[i]);
      }
    }
    let data2 = [];
    let len2 = data1.length;

    if (!isFulltimeselected && isParttimeselected) {
      for (let i = 0; i < len2; i++) {
        if (data1[i].type == "Part Time") data2.push(data1[i]);
      }
    } else if (!isParttimeselected && isFulltimeselected) {
      for (let i = 0; i < len2; i++) {
        if (data1[i].type == "Full Time") data2.push(data1[i]);
      }
    } else {
      data2 = data1;
    }

    setarray(data2);
  };
  const [searchText, setSearchText] = useState("");
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    let dataSearch = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(searchText.toString().toLowerCase())
      );
    });
    setarray(dataSearch);
  };

  return (
    <div>
      <Filter
        locFilter={locFilter}
        catgfilter={catgfilter}
        searchText={searchText}
        partTime={isParttimeselected}
        fullTime={isFulltimeselected}
        onLocSet={setlocFilter}
        onCatgSet={setcatgfilter}
        onSave={handleFilters}
        onSearch={handleSearch}
        onPartTimeCheck={setPartTime}
        onFullTimeCheck={setFullTime}
      />
      <Grid container spacing={5}>
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card className="job-card txt" variant="outlined">
                  <CardContent>
                    <Typography
                      className="name"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      <div className="row">
                        <div className="col-9">
                          {item.jobName} -{" "}
                          <span className="jobtype">{item.type}</span>
                        </div>
                        <div className="col-3">
                          <Popup
                            jobTitle={item.jobName}
                            type={item.type}
                            name={item.title}
                            desc={item.Description}
                            duration={item.Duration}
                            stipend={item.Salary}
                            deadline={item.Deadline}
                            phone={item.PhoneNo}
                            email={item.Email}
                            fullName={item.FullName}
                            location={item.location}
                          />
                        </div>
                      </div>
                    </Typography>
                    <Typography>
                      <div className="d-flex title">
                        {item.title}
                        &nbsp;&nbsp;&nbsp;
                        <Star />
                      </div>
                    </Typography>

                    <div>
                      <div
                        className="info-small"
                        style={{ display: "inline-block" }}
                      >
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <LocationOnOutlinedIcon /> {item.location}
                        </div>
                      </div>
                      <div
                        className="info-small"
                        style={{ display: "inline-block" }}
                      >
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <PhoneInTalkOutlinedIcon />
                          {item.PhoneNo}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-center info mt-5"
                      style={{ display: "inline-block" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <EventAvailableOutlinedIcon /> Duration
                      </div>
                      <div className="value">{item.Duration}</div>
                    </div>
                    <div
                      className="info text-center"
                      style={{ display: "inline-block" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <PaidOutlinedIcon />
                        Stipend
                      </div>
                      <div className="value">{item.Salary}</div>
                    </div>
                    <div
                      className="info text-center"
                      style={{ display: "inline-block" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <AccessTimeRoundedIcon />
                        Apply by
                      </div>
                      <div className="value">{item.Deadline}</div>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
