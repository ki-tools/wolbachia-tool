import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import ToolHeader from './ToolHeader';

function Header({
  sections,
  activeMainSection,
  activeToolSection,
  meta,
  countryIndex,
  setCountryIndex,
  onSidebarOpen,
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMenuSelect = (val) => {
    setAnchorElNav(null);
    navigate(val, { state: { prevPath: pathname } });
  };

  const title = (
    <>
      <Box sx={{ mr: 2 }} style={{ marginLeft: -12 }}>
        <img height="45" src="images/start_header_black.png" alt="START logo" />
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontWeight: 500,
          color: 'inherit',
          textDecoration: 'none',
          flexGrow: 1,
        }}
      >
        <em>Wolbachia</em> Decision-Support Tool
      </Typography>
    </>
  );

  return (
    <AppBar elevation={0} position="sticky" sx={{ background: '#2a2a2a' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 80 }}>
          {title}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex', lg: 'none' },
              justifyContent: 'end',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'block', lg: 'none' },
              }}
            >
              {sections.main.map((section, ii) => (
                <MenuItem
                  key={section.name}
                  onClick={() => handleNavMenuSelect(`/#${section.hash}`)}
                  selected={pathname === '/' && activeMainSection === ii}
                >
                  <Typography textAlign="center">{section.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => handleNavMenuSelect('/tool')}
                selected={pathname === '/tool'}
              >
                <Typography textAlign="center">Tool</Typography>
              </MenuItem>
              {pathname === '/tool' && <Divider />}
              {pathname === '/tool' &&
                sections.tool.map((section, ii) => (
                  <MenuItem
                    key={section.name}
                    onClick={() => handleNavMenuSelect(`/tool#${section.hash}`)}
                    selected={activeToolSection === ii}
                  >
                    <Typography textAlign="center">{section.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'none', lg: 'flex' },
              justifyContent: 'end',
            }}
          >
            {sections.main.map((section, ii) => (
              <Button
                disableRipple
                disableFocusRipple
                key={section.name}
                variant={
                  pathname === '/' && activeMainSection === ii
                    ? 'contained'
                    : 'text'
                }
                onClick={() => handleNavMenuSelect(`/#${section.hash}`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {section.name}
              </Button>
            ))}
            <Button
              disableRipple
              disableFocusRipple
              variant={pathname === '/tool' ? 'contained' : 'outlined'}
              onClick={() =>
                handleNavMenuSelect(`/tool#${sections.tool[0].hash}`)
              }
              sx={{
                ml: 1,
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 500,
              }}
            >
              Tool
            </Button>
          </Box>
        </Toolbar>
      </Container>
      {pathname === '/tool' && meta && (
        <ToolHeader
          meta={meta}
          sections={sections}
          countryIndex={countryIndex}
          setCountryIndex={setCountryIndex}
          onSidebarOpen={onSidebarOpen}
          activeToolSection={activeToolSection}
          pathname={pathname}
          handleNavMenuSelect={handleNavMenuSelect}
        />
      )}
    </AppBar>
  );
}
export default Header;
