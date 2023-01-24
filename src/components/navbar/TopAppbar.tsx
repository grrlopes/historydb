import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Mail } from "@mui/icons-material";
import * as S from "./Styles";
import { MouseEvent, useState } from "react";
import { NavMenu } from "../../shared/menu/Menu";

interface Props {
  open?: boolean;
  handleDrawerOpen(): void;
  handlerNavMobileOpen(): void;
}

const TopAppBar = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (): void => {
    props.handleDrawerOpen();
  };

  const handlerNavMobileOpen = (): void => {
    props.handlerNavMobileOpen();
  };

  const navMenuClose = (close: boolean): void => {
    setOpen(close);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <S.TopAppBar position="fixed" open={props.open}>
      <S.NavBar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          edge="start"
          sx={{
            mr: 2,
            ...(props.open && { display: "none" }),
            display: { sm: "none", xs: "none", md: "block" },
          }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open mobile"
          onClick={() => handlerNavMobileOpen()}
          edge="end"
          sx={{
            mr: 0,
            ...(props.open && { display: "none" }),
            display: { sm: "block", xs: "block", md: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          Test bla bla
        </Typography>
        <S.MenuIcon>
          <Mail sx={{ fontSize: 30 }} />
          <Avatar
            sx={{ bgcolor: "deepskyblue" }}
            alt={"Dummy"}
            src="https://artdependence.com/media/9893/unnamed.jpg"
            onClick={() => handleClick}
          >
            D
          </Avatar>
        </S.MenuIcon>
      </S.NavBar>

      <NavMenu open={open} anchor={anchorEl} navMenuClose={navMenuClose} />

    </S.TopAppBar>
  );
};

        // anchorEl={anchorEl}
        // open={open}
        // onClose={() => setOpen(false)}
export { TopAppBar };
