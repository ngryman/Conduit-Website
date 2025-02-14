import React, { FC } from 'react';
import { Dialog, DialogContent, useTheme } from '@mui/material';
import DownloadContainer from './DownloadContainer';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DownloadDialog: FC<Props> = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();
  return (
    <Dialog
      PaperProps={{
        elevation: 0,
        sx: { background: theme.palette.background.paper, borderRadius: '24px' },
      }}
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={() => setIsOpen(false)}>
      <DialogContent>
        <DownloadContainer />
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
