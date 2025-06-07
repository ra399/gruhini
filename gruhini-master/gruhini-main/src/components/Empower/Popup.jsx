import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog({ ques, video, instructions, color }) {
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
      <div className="button-end">
        <Button
          className="empower-card-button rounded"
          style={{
            backgroundColor: color,
            padding: "5px 15px",
            marginLeft: "auto",
          }}
          onClick={handleClickOpen}
          variant="contained"
        >
          Learn
        </Button>
      </div>
      <Dialog
        // minWidth={600}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="popup" id="responsive-dialog-title">
          {ques}
        </DialogTitle>
        <DialogContent className="popup">
          <iframe
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <DialogContentText className="txt display-linebreak" id="Inst">
            <ol className="instructions-list">
              {instructions.map((item) => {
                return (
                  <li className="m-2">
                    <em className="tri-color">{item.subheading}</em>
                    &nbsp; {item.text}
                    <ol>
                      {item.listitems.map((items) => {
                        return <li>{items.li}</li>;
                      })}
                    </ol>
                  </li>
                );
              })}
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="popup">
          <Button className="ctc1-small m-1" size="small" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
