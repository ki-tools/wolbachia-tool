import * as React from 'react';
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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';

const countries = ['Country A', 'Country B', 'Country C'];

function Header({ sections, activeMainSection, activeToolSection }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [country, setCountry] = React.useState(countries[0]);
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

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
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
        Wolbachia Decision-Support Tool
      </Typography>
    </>
  );

  return (
    <AppBar position="sticky" sx={{ background: '#2a2a2a' }}>
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
                <Typography textAlign="center">App</Typography>
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
              variant={pathname === '/tool' ? 'contained' : 'text'}
              onClick={() =>
                handleNavMenuSelect(`/tool#${sections.tool[0].hash}`)
              }
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
            >
              App
            </Button>
          </Box>
        </Toolbar>
      </Container>
      {pathname === '/tool' && (
        <Box sx={{ width: '100%', background: '#444444', height: '46px' }}>
          <Container
            maxWidth="xl"
            sx={{ background: '#444444', display: 'flex' }}
          >
            <Box>
              <FormControl
                variant="standard"
                sx={{
                  m: 1,
                  minWidth: 150,
                  marginTop: '10px',
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                }}
              >
                <Select
                  size="small"
                  value={country}
                  onChange={handleCountryChange}
                  disableUnderline
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    color: '#ffffff',
                    '& .MuiSvgIcon-root': {
                      color: 'white',
                    },
                    '& .MuiSelect-select': {
                      paddingLeft: 1,
                      paddingBottom: 0,
                      borderRadius: 2,
                      // background: '#5d5d5d',
                    },
                    fontWeight: 500,
                    // ':before': { borderBottomColor: 'white' },
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'none', lg: 'flex' },
                justifyContent: 'end',
              }}
            >
              {sections.tool.map((section, ii) => (
                <Button
                  size="small"
                  key={section.name}
                  variant={
                    pathname === '/tool' && activeToolSection === ii
                      ? 'contained'
                      : 'text'
                  }
                  onClick={() => handleNavMenuSelect(`/tool#${section.hash}`)}
                  sx={{
                    my: 1,
                    mx: 0.5,
                    color: 'white',
                    display: 'block',
                    fontWeight: 700,
                  }}
                >
                  {section.name}
                </Button>
              ))}
            </Box>
          </Container>
        </Box>
      )}
    </AppBar>
  );
}
export default Header;
