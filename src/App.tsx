import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  createTheme,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Theme,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { TopAppBar } from "./components/navbar/TopAppbar";
import { SidebarItems } from "./components/sidebar/SidebarItems";
import { Content } from "./components/content/Content";
import * as S from "./shared/drawerheader/Styles";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "@mui/system";
import { TopMobile } from "./components/mobile/navbar/TopMobile";

const drawerWidth = 200;

const App = () => {
  const theme = useTheme<Theme>();
  const [open, setOpen] = useState<boolean>(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [mode, setMode] = useState<any>("dark");
  const [mobile, setMobile] = useState<string>("top");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    setOpen(false);
  }, [matches]);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const themeMode = (theme: string): void => {
    setMode(theme);
  };

  const handlerNavMobileOpen = (): void => {
    setMobile("top");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <TopMobile />
      <Box sx={{ display: "flex", backgroundColor: "background.default" }}>
        <CssBaseline />

        <TopAppBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handlerNavMobileOpen={handlerNavMobileOpen}
        />

        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <S.DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr"
                  ? <ChevronLeftIcon />
                  : <ChevronRightIcon />}
              </IconButton>
            </S.DrawerHeader>

            <Divider />

            <SidebarItems mode={mode} themeMode={themeMode} />
          </Drawer>
        </Box>

        <Content open={open} />

        <Footer open={open} />
      </Box>
    </ThemeProvider>
  );
};

export { App };
