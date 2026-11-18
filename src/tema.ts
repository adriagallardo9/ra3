// PAS 1 · El tema de PratCursos
// El TEMA és el lloc on diem a MUI els colors, la lletra i les formes.
// Tots els components de la llibreria el llegeixen: no cal repetir colors.

import { createTheme } from '@mui/material/styles';

export const tema = createTheme({
  palette: {
    primary: { main: '#E1211D' }, // vermell PratFP
    secondary: { main: '#1F2A30' }, // gris fosc
    background: { default: '#F6F7F9' }, // fons gris molt clar de tota la pàgina
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
    h3: { fontWeight: 800 },
    // botons sense MAJÚSCULES i en negreta
    button: { textTransform: 'none', fontWeight: 700 },
  },
});
