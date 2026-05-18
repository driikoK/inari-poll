import { FC } from 'react';
import Box from '@mui/material/Box';

const Sheet: FC = () => {
  const url = process.env.VITE_SHEET_EMBED_URL;

  if (!url) return null;

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <iframe
        src={url}
        title="Google Sheet"
        loading="lazy"
        referrerPolicy="no-referrer"
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </Box>
  );
};

export default Sheet;
