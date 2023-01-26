import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  ModeNight,
  PeopleRounded,
  WatchLaterRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Props {
  mode: string;
  themeMode(mode: string): void;
}

const SidebarItems = (props: Props) => {
  const navigation = useNavigate();

  return (
    <Box>
      <List>
        {["Tracking", "History", "Community"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigation(text.toLowerCase())}>
              <ListItemIcon>
                {(() => {
                  switch (text) {
                    case "Tracking":
                      return <WatchLaterRounded />;
                    case "History":
                      return <ModeNight />;
                    case "Community":
                      return <PeopleRounded />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onChange={() =>
                props.themeMode(props.mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export { SidebarItems };
