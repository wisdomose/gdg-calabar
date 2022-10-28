import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/speakers",
    label: "Speakers",
  },
  {
    path: "/devfest",
    label: "Devfest",
  },
];

export default function NavBar({ isHome = false }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((state) => !state);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar color={isHome ? "transparent" : "default"} position="fixed">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}>
              <IconButton
                onClick={toggleOpen}
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "#ffffff" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: { xs: 0, sm: 1 } }}>
              <Button href="/" sx={{ color: isHome ? "#ffffff" : "#ffffff" }}>
                <img
                  src={Logo}
                  style={{
                    height: "50px",
                    width: "auto",
                    filter: "saturate(20)",
                  }}
                  alt="logo"
                />
              </Button>
            </Box>
            {pages.map((p) => (
              <Button
                variant="text"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: isHome ? "#000000" : "#000000",
                }}
                href={p.path}
                key={p.label}
              >
                {p.label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        // container={container}
        variant="temporary"
        open={open}
        onClose={toggleOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },

          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
        }}
      >
        <List>
          {pages.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton href={item.path} sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
