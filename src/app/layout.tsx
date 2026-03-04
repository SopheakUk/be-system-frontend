"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useState } from "react";
import * as React from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
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
                  boxSizing: "border-box",
                },
              }}
            >
              <Toolbar />
              <Box sx={{ p: 2 }}>Drawer content here</Box>
            </Drawer>

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                transition: "margin 0.3s",
                marginLeft: open ? `${drawerWidth}px` : 0,
              }}
            >
              {children}
            </Box>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
