import React from "react";
import {
  Box,
  Divider,
  Drawer as SideNav,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from "@material-ui/icons/Create";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "210px",
    "& a": {
      textDecoration: "none",
    },
  },
  paper: {
    backgroundColor: "#ff7961",
  },
});

const Drawer = () => {
  const classes = useStyles();
  const itemMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Create Fellow", icon: <CreateIcon />, path: "/create" },
    { text: "List Fellow", icon: <ListIcon />, path: "/list" },
  ];

  return (
    <SideNav
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.paper }}
    >
      <List>
        <Box m={1}>
          <Typography variant="h5" align="center" color="textPrimary">
            Menu
          </Typography>
        </Box>
        <Divider />
        {itemMenu.map((menu, index) => (
          <Link to={menu.path}>
            <ListItem button key={index}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </SideNav>
  );
};

export default Drawer;
