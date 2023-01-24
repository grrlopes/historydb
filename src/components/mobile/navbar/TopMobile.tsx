import { Box, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { SidebarItems } from "../../sidebar/SidebarItems";

type Anchor = "top";

const TopMobile = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SidebarItems mode="light" />
    </Box>
  );

  return (
    <SwipeableDrawer
      open={state["top"]}
      anchor="top"
      onOpen={toggleDrawer("top", true)}
      onClose={toggleDrawer("top", false)}
    >
      {list("top")}
    </SwipeableDrawer>
  );
};

export { TopMobile };
