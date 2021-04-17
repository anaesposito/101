import "./Article.scss";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Article = ({
  title,
  price,
  condition,
  img,
  regularPrice,
  seller,
  shipping,
  onClick,
  className,
  productId,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-end"
      className={classes.root && className}
      spacing={3}
    >
      <Grid item className="art-container" xs={12}>
        <Paper className={classes.control && "art-display"}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <div className="info-prod">
                <img onClick={onClick} alt="product" src={img} />
                <div className="detail-info">
                  <h4 onClick={onClick}>{title}</h4>
                  <p className="seller">Vendido por {seller}</p>
                  <p>{condition === "new" ? "Nuevo" : "Usado"}</p>
                  <p className="price">${price}</p>
                  <p className="discount">
                    {price < regularPrice ? `$${regularPrice}` : ""}
                  </p>

                  <p className="shipping">{shipping ? "Envio Gratis" : ""}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Article;
