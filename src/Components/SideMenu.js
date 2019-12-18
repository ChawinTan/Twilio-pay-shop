import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";

import appConstants from "../constants";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    width: appConstants.drawerWidth,
    backgroundColor: "#cead00"
  },
  toolBar: theme.mixins.toolbar,
  icons: {
    color: "#e5e5e5"
  },
  font: {
    fontFamily: "Comic Sans MS",
    color: "#e5e5e5",
    fontWeight: 600
  }
}));

function SideMenu() {
  const classes = useStyles();
  const mainMenu = [
    <ListItem key={0} button>
      <ListItemIcon>
        <HomeIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"Home"}
      />
    </ListItem>,
    <ListItem key={1} button>
      <ListItemIcon>
        <EmojiPeopleIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"Apparel"}
      />
    </ListItem>,
    <ListItem key={2} button>
      <ListItemIcon>
        <DirectionsRunIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"Shoes"}
      />
    </ListItem>,
    <ListItem key={3} button>
      <ListItemIcon>
        <FastfoodIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"Gourmet"}
      />
    </ListItem>,
    <ListItem key={4} button>
      <ListItemIcon>
        <MusicNoteIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"Instruments"}
      />
    </ListItem>
  ];
  const aboutMenu = [
    <ListItem key={0} button>
      <ListItemIcon>
        <InfoIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"About"}
      />
    </ListItem>,
    <ListItem key={1} button>
      <ListItemIcon>
        <ContactsIcon className={classes.icons} />
      </ListItemIcon>
      <ListItemText
        className={classes.font}
        disableTypography
        primary={"Contact"}
      />
    </ListItem>
  ];
  return (
    <div className={classes.root}>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.toolBar} />
        <Divider />
        <List>
          {mainMenu.map(item => {
            return item;
          })}
        </List>
        <Divider />
        <List>
          {aboutMenu.map(item => {
            return item;
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default SideMenu;
