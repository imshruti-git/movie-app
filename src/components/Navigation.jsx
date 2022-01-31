import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction  component={Link} to="/movies" style={{color: "white"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction component={Link} to="/series" style={{color: "white"}} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction component={Link} to="/search" style={{color: "white"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
