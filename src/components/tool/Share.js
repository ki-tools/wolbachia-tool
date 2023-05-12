import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Share = () => {
  const [isOpen, setIsOpen] = useState(false);
  const url = window.location.href;
  const [copyText, setCopyText] = useState('Copy');

  const handleShareModal = () => {
    setIsOpen(!isOpen);
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
  };

  return (
    <>
      <Tooltip title="Share">
        <IconButton onClick={handleShareModal} size="small" color="inherit">
          <ShareIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={isOpen}
        className="trelliscope-app"
        style={{ zIndex: 8000, fontWeight: 300 }}
        aria-labelledby="dialog-info-title"
        onClose={handleShareModal}
        maxWidth="md"
      >
        <DialogTitle id="dialog-info-title">
          Share a link to this app in its current state
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '650px',
            }}
          >
            <Tooltip
              title={`${copyText} to clipboard`}
              followCursor
              placement="top"
              arrow
            >
              <TextField
                onClick={copyUrlToClipboard}
                value={url}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Tooltip>
            <Button
              aria-label="share close"
              color="primary"
              onClick={copyUrlToClipboard}
            >
              <ContentCopyIcon />
              {copyText}
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button aria-label="share close" onClick={handleShareModal}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Share;
