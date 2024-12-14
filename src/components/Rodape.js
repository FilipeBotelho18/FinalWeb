import React from 'react';
import { Box, Typography } from '@mui/material';

const Rodape = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#e3f2fd', 
        color: '#0d47a1', 
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '14px',
        zIndex: 1000,
      }}
    >
      <Typography variant="body2">
        © 2024 Sua Empresa. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Rodape;
