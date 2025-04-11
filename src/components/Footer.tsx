import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ p: 4, bgcolor: 'grey.200' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}