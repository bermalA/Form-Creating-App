import { Translate } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import useStyles from "./NavbarStyle";

const Navbar = () => {
    const classes = useStyles()
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.items}>
          <Translate />
          <Typography>Türkçe</Typography>
        </div>
        <Avatar className={classes.icon}/>
      </div>
    </div>
  );
};

export default Navbar;