import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

// import "./styles.js";
import { Button, Footer } from "./styles.js";

export default function MainTemplate() {
  const { pathname } = useLocation();

  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
  ];

  return (
    <>
      <header>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Sales
              </Typography>

              <Box sx={{ flexGrow: 1, display: "flex" }}>
                {menu.map(({ to, label }) => (
                  <Button
                    key={label}
                    component={Link}
                    to={to}
                    current={pathname === to}
                  >
                    {label}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton component={Link} sx={{ p: 0 }}>
                  <Avatar alt="Romain BODNAR">RB</Avatar>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Typography>COPYRIGHT</Typography>
      </Footer>
    </>
  );
}
