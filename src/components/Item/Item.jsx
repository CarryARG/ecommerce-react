import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{ width: 300, height: 400 }}
      style={{ backgroundColor: "whitesmoke" }}
    >
      <CardMedia sx={{ width: 160, height: 160 }} image={element.img} />
      <CardContent>
        <Typography
          sx={{ height: 55 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          <b>{element.title}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>${element.price}</b>
        </Typography>
        <Typography sx={{ height: 50 }} variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ height: 10 }}>
        <Link
          to={`/itemDetail/${element.id}`} //javascript
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button size="small" variant="contained" style={{ color: "#156A6D" }}>
            <b style={{ color: "black" }}>Ver Detalle</b>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
