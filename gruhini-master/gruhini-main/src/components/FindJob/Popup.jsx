import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import Star from "./Star";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function ResponsiveDialog({
  jobTitle,
  type,
  name,
  desc,
  duration,
  stipend,
  deadline,
  phone,
  email,
  fullName,
  location,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="open-button" size="small" onClick={handleClickOpen}>
        <LaunchRoundedIcon />
      </Button>
      <Dialog
        // minWidth={600}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="popup txt" id="responsive-dialog-title">
          {jobTitle} - <span className="jobtype">{type}</span>
          <div className="d-flex title">
            {name}
            &nbsp;&nbsp;&nbsp;
            <Star />
          </div>
        </DialogTitle>
        <DialogContent className="popup txt">
          <div className="row">
            <div className="col-7">{desc}</div>
            <div className="col contact-info">
              <div className="mt-3 mb-3">
                <PersonRoundedIcon />
                &nbsp; &nbsp;
                {fullName}
              </div>
              <div className="mt-3 mb-3">
                <LocalPhoneRoundedIcon />
                &nbsp; &nbsp;
                {phone}
              </div>
              <div className="mt-3 mb-3">
                <EmailRoundedIcon />
                &nbsp; &nbsp;
                {email}
              </div>
              <div className="mt-3 mb-3">
                <PlaceRoundedIcon />
                &nbsp; &nbsp;
                {location}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="popup txt">
          <div className="wrap-info-popup mt-4">
            <div
              className="text-center info-popup ps-4 pe-5 pb-3"
              style={{ display: "inline-block" }}
            >
              <div className="tag" style={{ display: "inline-flex" }}>
                <EventAvailableOutlinedIcon /> Duration
              </div>
              <div className="value">{duration}</div>
            </div>
            <div
              className="info-popup pe-5 pb-3 text-center"
              style={{ display: "inline-block" }}
            >
              <div className="tag" style={{ display: "inline-flex" }}>
                <PaidOutlinedIcon />
                Stipend
              </div>
              <div className="value">{stipend}</div>
            </div>
            <div
              className="info-popup pe-5 pb-3 text-center"
              style={{ display: "inline-block" }}
            >
              <div className="tag" style={{ display: "inline-flex" }}>
                <AccessTimeRoundedIcon />
                Apply by
              </div>
              <div className="value">{deadline}</div>
            </div>
          </div>
          <Button
            className="ctc1-small me-4 m-1"
            size="small"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
