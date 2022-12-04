import Box from '@mui/material/Box';
import TuneIcon from '@mui/icons-material/Tune';
// import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ToolHeader({
  meta,
  onSidebarOpen,
  countryIndex,
  setCountryIndex,
  sections,
  activeToolSection,
  pathname,
  handleNavMenuSelect,
}) {
  const handleCountryChange = (event) => {
    setCountryIndex(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', background: '#444444', height: '46px' }}>
      <Box
        // maxWidth="xl"
        sx={{ background: '#444444', display: 'flex' }}
        style={{ maxWidth: '100%', marginLeft: 8, marginRight: 20 }}
      >
        <Box
          sx={{ display: { xs: 'block', md: 'none' }, marginTop: '10px' }}
          marginLeft={2}
        >
          <Button
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            size="small"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
              padding: '3px',
              backgroundColor: 'white',
              borderColor: 'white',
              // borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <TuneIcon sx={{ fontSize: '19px' }} />
          </Button>
        </Box>{' '}
        <Box>
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              width: 270,
              marginTop: '10px',
              bgcolor: 'primary.main',
              borderRadius: 2,
            }}
          >
            <Select
              size="small"
              value={countryIndex}
              onChange={handleCountryChange}
              disableUnderline
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
                '& .MuiSelect-select': {
                  paddingLeft: 1,
                  paddingTop: '2px',
                  paddingBottom: '2px',
                  borderRadius: 2,
                  // background: '#5d5d5d',
                },
                // ':before': { borderBottomColor: 'white' },
              }}
            >
              {Object.entries(meta).map(([key, value], ii) => (
                <MenuItem key={key} value={ii}>
                  {value.country}
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
              disableRipple
              disableFocusRipple
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
      </Box>
    </Box>
  );
}
