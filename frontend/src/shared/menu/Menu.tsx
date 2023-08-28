import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FC } from "react";

interface Props {
  open: boolean;
  anchor: any;
  navMenuClose(close: boolean): void;
}

const NavMenu: FC<Props> = (props: Props) => {
  const menuClose = () => {
    props.navMenuClose(false);
  };

  return (
    <Menu
      id="nav-menu"
      aria-labelledby="nav-menu"
      anchorEl={props.anchor}
      open={props.open}
      onClose={() => menuClose()}
      MenuListProps={{
        "aria-labelledby": "nav-menu",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};

export { NavMenu };
