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

export default function ResponsiveDialog({
  name,
  desc,
  image,
  email,
  phone,
  loc,
  cost,
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
      <Button className="ctc1-small m-1" size="small" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog
        // minWidth={600}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="popup" id="responsive-dialog-title">
          {name}
        </DialogTitle>
        <DialogContent className="popup">
          <div className="row">
            <div className="col-6">
              <CardMedia
                className="rounded"
                component="img"
                height="200"
                image={image}
                alt="service image"
              />
            </div>
            <div className="col-6 contact-info">
              <h3>{name}</h3>
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
                {loc}
              </div>
              <div className="mt-3 mb-3">
                <CurrencyRupeeRoundedIcon />
                &nbsp; &nbsp;
                {cost}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <DialogContentText className="txt">{desc}</DialogContentText>
          </div>
        </DialogContent>
        <DialogActions className="popup">
          <Button className="ctc2-small m-1" href={email} size="small">
            Contact
          </Button>
          <Button className="ctc1-small m-1" size="small">
            Hire Me
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
