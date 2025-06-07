import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import { Button } from "@mui/material";

const YourJobs = ({ arr }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="yourJob">
      <Button
        className="show mt-5 ms-5 ctc1-small"
        onClick={() => setShow(!show)}
      >
        Show Jobs Posted by you
      </Button>
      {show && (
        <div className="row p-3 show">
          {arr.map((item) => {
            return (
              <div className="col mt-5 mb-5">
                <Card className="card">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.jobName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {item.title}
                    </Typography>

                    <div>
                      <div className="info" style={{ display: "inline-block" }}>
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <LocationOnOutlinedIcon /> {item.location}
                        </div>
                      </div>
                      <div className="info" style={{ display: "inline-block" }}>
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <PhoneInTalkOutlinedIcon />
                          {item.PhoneNo}
                        </div>
                      </div>
                    </div>
                    <div className="info" style={{ display: "inline-block" }}>
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <EventAvailableOutlinedIcon /> Duration
                      </div>
                      <div className="value">{item.Duration}</div>
                    </div>
                    <div className="info" style={{ display: "inline-block" }}>
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <PaidOutlinedIcon />
                        Stipend
                      </div>
                      <div className="value">{item.Salary}</div>
                    </div>
                    <div className="info" style={{ display: "inline-block" }}>
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <AccessTimeFilledOutlinedIcon />
                        Apply by
                      </div>
                      <div className="value">{item.Deadline}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default YourJobs;
