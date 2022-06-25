import {
  Article,
  Assessment,
  Assignment,
  ExpandMore,
  Group,
  Home,
  MoreHoriz,
  Subject,
  Summarize,
} from "@mui/icons-material";
import { IconButton, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";
import useStyles from "./LeftbarStyle";


const Leftbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <Typography variant="h4" className={classes.logo}>
          inviso
        </Typography>
      </div>
      <div className={classes.center}>
        <MenuList className={classes.list}>
          <MenuItem className="menuItem">
            <Home className={classes.icon} />
            Anasayfa
          </MenuItem>
          <div className={classes.menuContainer}>
            <MenuItem className="menuItem">
              <Article className={classes.icon}/>
              Form Yönetimi
            </MenuItem>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
          <div className={classes.menuContainer}>
            <MenuItem className="menuItem">
              <Summarize className={classes.icon}/>
              Görev Yönetimi
            </MenuItem>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
          <div className={classes.menuContainer}>
            <MenuItem className="menuItem">
              <Assessment className={classes.icon}/>
              Rapor
            </MenuItem>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
          <div className={classes.menuContainer}>
            <MenuItem className="menuItem">
              <Group className={classes.icon}/>
              Kullanıcı İşlemleri
            </MenuItem>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
          <div className={classes.menuContainer}>
            <MenuItem className="menuItem">
              <MoreHoriz className={classes.icon}/>
              Daha Fazlası
            </MenuItem>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
          <MenuItem className="menuItem">
            <Assignment className={classes.icon}/>
            Formlarım
          </MenuItem>
          <MenuItem className="menuItem">
            <Subject className={classes.icon}/>
            Görevlerim
          </MenuItem>
        </MenuList>
      </div>
    </div>
  );
};

export default Leftbar;