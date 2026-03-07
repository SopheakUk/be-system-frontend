"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  ListItemText,
  ListSubheader,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

function AuthGuard({ children }: { children: React.ReactNode }) {
  const drawerWidth = 240;
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen(!open);

  const [openFruits, setOpenFruits] = useState(true);
  const [openVeggies, setOpenVeggies] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            paddingTop: "4rem",
            boxSizing: "border-box",
          },
        }}
      >
        <Box>
          <MenuList>
            <Accordion disableGutters>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>User Management</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuItem>Users Summary</MenuItem>
                <MenuItem>Banana</MenuItem>
                <MenuItem>Orange</MenuItem>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Vegetables</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuItem>Carrot</MenuItem>
                <MenuItem>Broccoli</MenuItem>
                <MenuItem>Spinach</MenuItem>
              </AccordionDetails>
            </Accordion>
          </MenuList>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "margin 0.3s",
          marginTop: "10px",
          marginLeft: open ? `${drawerWidth}px` : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AuthGuard>{children}</AuthGuard>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
