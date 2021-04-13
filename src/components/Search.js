import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.scss";

const Search = ({ onChange, searchValue }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

  const classes = useStyles();

  return (
    <div className="search-content">
      <div className="background-search">
        <form>
          <Paper className={classes.root}>
            <InputBase
              onChange={onChange}
              value={searchValue}
              className={classes.input}
              placeholder="Buscar productos, marcas y más..."
              inputProps={{
                "aria-label": "buscar productos, marcas y más ...",
              }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            ></IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      </div>
    </div>
  );
};

export default Search;
