// src/components/Navbar.tsx
/**
 * Different MUI React navbar templates can be found at: https://mui.com/material-ui/react-app-bar/
 */

import React, { FC, ReactElement } from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

/**
 * 
 * useState allows you to track the state of something. When first called it returns [CurrentState, TheSetFunction]
 * 
 * An MUI Menu component (https://mui.com/material-ui/api/menu/) has an anchorEl property that sets the position of the menu
 * 
 * onClick='some javascript' is an HTML Event. The javascript is executed when the event happens. So onClick={handleOpenNavMenu} 
 *    uses the event.currentTarget property (https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget) and
 *    sets anchorElNav to be the element to which the event handler is attached.
 */

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.dark",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            color="primary.light"
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            App Name
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: "flex", md: "none" },
              backgroundColor: 'primary.dark',
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="primary.light"
                  underline="none"
                  variant="button"
                >
                  <MenuItem sx={{ backgroundColor: 'primary.dark' }} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>   
          <Typography
            color="primary.light"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            App Name Flex
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                backgroundColor: 'primary.dark',
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="primary.light"
                  underline="none"
                  variant="button"
                  sx={{ fontSize: "large", marginLeft: "2rem" }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;