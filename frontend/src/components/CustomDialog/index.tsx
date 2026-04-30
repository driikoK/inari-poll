import { PropsWithChildren } from 'react';
import { Button, DialogProps, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DialogContainer, DialogBody, DialogHeader } from './styles';

type CustomDialogProps = {
  onClose: () => void;
  isShowBack?: boolean;
  onBack?: () => void;
} & DialogProps &
  PropsWithChildren;

const CustomDialog = ({ onClose, onBack, isShowBack, open, children }: CustomDialogProps) => {
  const handleClose = (event: any, reason: string) => {
    if (reason && reason === 'backdropClick') return;
    onClose();
  };

  return (
    <DialogContainer open={open} onClose={handleClose} fullWidth scroll="body">
      <DialogHeader>
        {isShowBack && (
          <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ paddingLeft: '20px' }} color="secondary">
            Назад
          </Button>
        )}

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogHeader>

      <DialogBody>{children}</DialogBody>
    </DialogContainer>
  );
};

export default CustomDialog;
