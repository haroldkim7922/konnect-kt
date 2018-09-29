import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

function SideBar() {
  return (
    <Drawer
      variant="permanent"
      //classes={{ paper: classes.drawerPaper }}
      anchor={"left"}
    >
      <div />
      {/* className={classes.toolbar} /> */}
      <Divider />
      <List>{"Lounges"}</List>
      <Divider />
      <List>{"Clubs"}</List>
    </Drawer>
  );
}

export default SideBar;
