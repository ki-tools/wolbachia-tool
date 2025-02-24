import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import SidebarControls from './SidebarControls';

const Sidebar = ({ meta, open, variant, onClose, inputs, setInputs }) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 300,
          top: { xs: 0, md: 130 },
          height: { xs: '100%', md: 'calc(100% - 130px)' },
          background: theme.palette.alternate.main,
        },
      }}
    >
      <SidebarControls meta={meta} inputs={inputs} setInputs={setInputs} />
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
