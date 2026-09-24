import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BalanceIcon from "@mui/icons-material/Balance";

import { ACCENT, ACCENT_HOVER, LINE, theme } from "../Theme.js";

const NAV = [
  {
    label: "Home Style",
    children: ["Home One", "Home Two", "Home Three"],
  },
  {
    label: "About Page",
    children: ["About Us", "Our Team"],
  },
  {
    label: "Our Services",
  },
  {
    label: "Other Pages",
    children: ["FAQ", "Pricing", "Contact"],
  },
];

const SOCIALS = [FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon];

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.25}
      sx={{
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 55,
          display: "grid",
          placeItems: "center",
          border: `2px solid ${ACCENT}`,
          borderRadius: "10px 10px 26px 26px",
        }}
      >
        <BalanceIcon
          sx={{
            color: ACCENT,
            fontSize: 28,
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: {
            xs: 34,
            md: 46,
          },
          letterSpacing: 1.5,
          lineHeight: 1,
        }}
      >
        Lawak
      </Typography>
    </Stack>
  );
}

/* =========================
   TOP BAR
========================= */

function TopBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: 72, display: { xs: "none", sm: "flex" }, width: "100%" }}
    >
      {" "}
      {/* LEFT INFORMATION */}{" "}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ flex: 1 }}
      >
        {" "}
        {/* Location */}{" "}
        <Stack direction="row" spacing={1} alignItems="center">
          {" "}
          <LocationOnIcon sx={{ color: ACCENT, fontSize: 22 }} />{" "}
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            {" "}
            MADIUN EAST JAVA{" "}
          </Typography>{" "}
        </Stack>{" "}
        {/* Phone */}{" "}
        <Stack direction="row" spacing={1} alignItems="center">
          {" "}
          <PhoneIcon sx={{ color: ACCENT, fontSize: 22 }} />{" "}
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            {" "}
            ( +62 ) 123 456 789{" "}
          </Typography>{" "}
        </Stack>{" "}
      </Stack>{" "}
      {/* SOCIAL ICONS */}{" "}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2.5}
        sx={{ float: "right" }}
      >
        {" "}
        {SOCIALS.map((Icon, i) => (
          <Icon
            key={i}
            sx={{
              fontSize: 20,
              cursor: "pointer",
              "&:hover": { color: ACCENT },
            }}
          />
        ))}{" "}
      </Stack>{" "}
    </Stack>
  );
}

/* =========================
   DESKTOP NAVIGATION
========================= */

function DesktopLinks() {
  const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(null);

  const handleMenuOpen = (event, label) => {
    setAnchor(event.currentTarget);
    setOpen(label);
  };

  const handleMenuClose = () => {
    setAnchor(null);
    setOpen(null);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={{
        md: 3,
        lg: 5,
      }}
      sx={{
        flex: 1,
      }}
    >
      {NAV.map((item) => (
        <Box key={item.label}>
          <Button
            disableRipple
            onClick={(event) => {
              if (item.children) {
                handleMenuOpen(event, item.label);
              }
            }}
            endIcon={item.children ? <KeyboardArrowDownIcon /> : null}
            sx={{
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              fontSize: 16,
              p: 0,
              minWidth: 0,

              "&:hover": {
                background: "none",
                color: ACCENT,
              },

              "& .MuiButton-endIcon": {
                ml: 0.5,
              },
            }}
          >
            {item.label}
          </Button>

          {item.children && (
            <Menu
              anchorEl={anchor}
              open={open === item.label}
              onClose={handleMenuClose}
            >
              {item.children.map((child) => (
                <MenuItem key={child} onClick={handleMenuClose}>
                  {child}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>
      ))}
    </Stack>
  );
}

/* =========================
   MOBILE DRAWER
========================= */

function MobileDrawer({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (label) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 290,
          bgcolor: "#1a1412",
          color: "#fff",
        },
      }}
    >
      {/* Close Button */}
      <Stack direction="row" justifyContent="flex-end" p={1}>
        <IconButton
          onClick={onClose}
          sx={{
            color: "#fff",
          }}
          aria-label="Close menu"
        >
          <CloseIcon />
        </IconButton>
      </Stack>

      {/* Navigation */}
      <List>
        {NAV.map((item) => (
          <React.Fragment key={item.label}>
            <ListItemButton
              onClick={() => {
                if (item.children) {
                  handleExpand(item.label);
                } else {
                  onClose();
                }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />

              {item.children && (
                <KeyboardArrowDownIcon
                  sx={{
                    transform:
                      expanded === item.label
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                />
              )}
            </ListItemButton>

            {item.children && (
              <Collapse
                in={expanded === item.label}
                timeout="auto"
                unmountOnExit
              >
                {item.children.map((child) => (
                  <ListItemButton
                    key={child}
                    sx={{
                      pl: 4,
                    }}
                    onClick={onClose}
                  >
                    <ListItemText
                      primary={child}
                      primaryTypographyProps={{
                        fontSize: 14,
                        color: "rgba(255,255,255,.75)",
                      }}
                    />
                  </ListItemButton>
                ))}
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      {/* Quotation Button */}
      <Box p={2}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Get a Quotation
        </Button>
      </Box>
    </Drawer>
  );
}

/* =========================
   NAVBAR
========================= */

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="header"
      sx={{
        color: "#fff",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1460,
          px: {
            xs: 2.5,
            sm: 4,
          },
        }}
      >
        {/* Top Bar */}
        <TopBar />

        {/* Main Navigation */}
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            borderTop: {
              sm: LINE,
            },
            borderBottom: {
              sm: LINE,
            },
            height: {
              xs: 90,
              md: 92,
            },
          }}
        >
          {/* LEFT - LOGO */}
          <Logo />

          {isMobile ? (
            /* MOBILE */
            <Box
              sx={{
                ml: "auto",
              }}
            >
              <IconButton
                onClick={() => setDrawer(true)}
                sx={{
                  color: "#fff",
                }}
                aria-label="Open menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          ) : (
            /* DESKTOP */
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                flex: 1,
                ml: {
                  md: 4,
                  lg: 6,
                },
              }}
            >
              {/* CENTER NAVIGATION */}
              <DesktopLinks />

              {/* RIGHT BUTTON */}
              <Box
                sx={{
                  ml: {
                    md: 3,
                    lg: 5,
                  },
                  flexShrink: 0,
                }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    px: 3.75,
                    py: 1.6,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 16,

                    "&:hover": {
                      bgcolor: ACCENT_HOVER,
                    },
                  }}
                >
                  Get a Quotation
                </Button>
              </Box>
            </Stack>
          )}
        </Stack>
      </Container>

      {/* MOBILE DRAWER */}
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />
    </Box>
  );
}
