// PAS 3 · La presentació (la zona gran sota la capçalera)

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export function Presentacio() {
  return (
    <Box
      sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.light', letterSpacing: 3 }}
          >
            Formació contínua · Prat FP
          </Typography>
          <Typography variant="h3" component="h2">
            Aprèn el que demanen les empreses
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: 'grey.400', fontWeight: 400 }}
          >
            Cursos curts d’informàtica, màrqueting, administració i logística.
            Tria el teu, mira’n el programa i inscriu-te en un clic.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
              href="#cursos"
              endIcon={<ArrowDownwardIcon />}
            >
              Veure els cursos
            </Button>
            <Button variant="outlined" size="large" color="inherit">
              Com funciona
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
