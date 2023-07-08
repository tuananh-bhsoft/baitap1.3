import React from "react";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import rollToTop from "../../assets/icons/design-elements/RollToTop.svg";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const drawerWidth = 350;

const Header = (props) => {
  const theme = useTheme();

  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ padding: 1, overflow: "hidden" }}>
      <img className="main-logo" src={mainLogo} alt="Main logo" />
      <Box
        className="nav-links"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          rowGap: 1,
          paddingLeft: "5px",
          marginTop: 1,
          letterSpacing: "0.1rem",
        }}
      >
        <Link
          className="nav-item active"
          href="/"
          underline="none"
          sx={{
            color: "txt.primary.light",
            fontSize: "fontSize.medium",
            fontWeight: "600",
            whiteSpace: "nowrap",
            transition: "0.25s ease-in-out",

            "&:hover": {
              color: "txt.primary.light",
            },
          }}
        >
          Home +
        </Link>
        <Link
          className="nav-item"
          href="/"
          underline="none"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.medium",
            fontWeight: "500",
            whiteSpace: "nowrap",
            transition: "0.25s ease-in-out",

            "&:hover": {
              color: "txt.primary.light",
            },
          }}
        >
          About
        </Link>
        <Link
          className="nav-item"
          href="/"
          underline="none"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.medium",
            fontWeight: "500",
            whiteSpace: "nowrap",
            transition: "0.25s ease-in-out",

            "&:hover": {
              color: "txt.primary.light",
            },
          }}
        >
          Service
        </Link>
        <Link
          className="nav-item"
          href="/"
          underline="none"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.medium",
            fontWeight: "500",
            whiteSpace: "nowrap",
            transition: "0.25s ease-in-out",

            "&:hover": {
              color: "txt.primary.light",
            },
          }}
        >
          Gallery
        </Link>
        <Link
          className="nav-item"
          href="/"
          underline="none"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.medium",
            fontWeight: "500",
            whiteSpace: "nowrap",
            transition: "0.25s ease-in-out",

            "&:hover": {
              color: "txt.primary.light",
            },
          }}
        >
          Blog
        </Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        height: 0,
      }}
    >
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: trigger
              ? "rgba(255, 255, 255, 0.95)"
              : "transparent",
            paddingY: 0,
            marginTop: trigger ? "0" : 2,
            boxShadow: trigger
              ? "10px 13px 80px 14px rgba(242, 244, 255, 0.95)"
              : "none",
            transition: "0.25s ease-in-out",

            [theme.breakpoints.down("laptop")]: {
              paddingY: 0,
              paddingX: 3,
            },
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              maxWidth: "content",
              display: "flex",
              justifyContent: "space-between",
            }}
            disableGutters
          >
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <Box
              sx={{
                display: "none",
                cursor: "pointer",

                [theme.breakpoints.down("laptop")]: {
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: 3,
                },
              }}
            >
              <img
                className="hamburger"
                src={hamburgerMenu}
                alt="Hamburger"
                onClick={handleDrawerToggle}
              />
              <Box
                sx={{
                  display: "none",

                  [theme.breakpoints.down("laptop")]: {
                    display: "block",
                  },
                  [theme.breakpoints.down("tablet")]: {
                    display: "none",
                  },
                }}
              >
                <PrimaryButton>Contact</PrimaryButton>
              </Box>
            </Box>
            <Box
              className="nav-links"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: 3,

                [theme.breakpoints.down("laptop")]: {
                  display: "none",
                },
              }}
            >
              <Link
                className="nav-item active"
                href="/"
                underline="none"
                sx={{
                  color: "txt.primary.light",
                  fontSize: "fontSize.medium",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    color: "txt.primary.light",
                  },
                }}
              >
                Home +
              </Link>
              <Link
                className="nav-item"
                href="/"
                underline="none"
                sx={{
                  color: "txt.tertiary.medium",
                  fontSize: "fontSize.medium",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    color: "txt.primary.light",
                  },
                }}
              >
                About
              </Link>
              <Link
                className="nav-item"
                href="/"
                underline="none"
                sx={{
                  color: "txt.tertiary.medium",
                  fontSize: "fontSize.medium",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    color: "txt.primary.light",
                  },
                }}
              >
                Service
              </Link>
              <Link
                className="nav-item"
                href="/"
                underline="none"
                sx={{
                  color: "txt.tertiary.medium",
                  fontSize: "fontSize.medium",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    color: "txt.primary.light",
                  },
                }}
              >
                Gallery
              </Link>
              <Link
                className="nav-item"
                href="/"
                underline="none"
                sx={{
                  color: "txt.tertiary.medium",
                  fontSize: "fontSize.medium",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    color: "txt.primary.light",
                  },
                }}
              >
                Blog
              </Link>
              <PrimaryButton>Contact</PrimaryButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props} sx={{ zIndex: "10" }}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            width: "36px",
            height: "36px",
            backgroundColor: "bg.primary",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            right: "50px",
            bottom: "100px",
            transition: "0.25s ease-in-out",

            "&:hover": {
              cursor: "pointer",
              backgroundColor: "bg.secondary.medium",
              boxShadow: "-2px 6px 16px -1px #e6e9fd",
            },
          }}
        >
          <img src={rollToTop} alt="Roll to top button" />
        </Fab>
      </ScrollTop>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
