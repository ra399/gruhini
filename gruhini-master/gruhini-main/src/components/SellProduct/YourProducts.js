import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Popup from "../BuyProduct/Popup";

const YourProducts = ({ arr }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="yourPros">
      <Button
        className="show mt-5 ms-5 ctc1-small"
        onClick={() => setShow(!show)}
      >
        Show Services posted by You
      </Button>
      {show && (
        <div className="row p-3 show">
          {arr.map((item) => {
            const email = `mailto:${item.Email}`;
            return (
              <div className="col text-center d-block mx-auto mt-5 mb-5">
                <Card
                  sx={{ maxWidth: 345, minWidth: 295 }}
                  className="p-3 service-card"
                >
                  <CardMedia
                    className="border rounded"
                    component="img"
                    height="200"
                    image={item.Image}
                    alt="service image"
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div">
                      {item.Name}
                    </Typography>
                    <Typography className="short-desc" variant="body2">
                      {item.ShortDesc}
                    </Typography>
                  </CardContent>
                  <CardActions className="card-actions">
                    <Button
                      className="ctc2-small m-1"
                      href={email}
                      size="small"
                    >
                      Contact
                    </Button>
                    <Popup
                      name={item.Name}
                      desc={item.Description}
                      image={item.Image}
                      email={item.Email}
                      phone={item.PhoneNo}
                      loc={item.location}
                      cost={item.Cost}
                    />
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default YourProducts;
