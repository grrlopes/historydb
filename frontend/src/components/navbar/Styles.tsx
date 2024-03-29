import { Box, Grid, styled, Toolbar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 200;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const TopAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // backgroundColor: "red",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar = styled(Toolbar)({
  display: "grid",
});

const Grad = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

const MenuIcon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export { Grad, MenuIcon, NavBar, TopAppBar };
