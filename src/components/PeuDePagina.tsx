// PAS 12 · El peu de pàgina

import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';

export function PeuDePagina() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 4, bgcolor: 'white' }}>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ justifyContent: 'space-between' }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 PratCursos · Prat FP · Sessió 15 del mòdul 0488
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://mui.com/material-ui/"
              target="_blank"
              rel="noreferrer"
              variant="body2"
            >
              Documentació de MUI
            </Link>
            <Link
              href="https://pratfp.com"
              target="_blank"
              rel="noreferrer"
              variant="body2"
            >
              pratfp.com
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
