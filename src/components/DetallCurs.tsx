// PAS 10 · La fitxa d'un curs dins d'un diàleg

import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { Curs } from '../dades/cursos';

type Props = {
  curs: Curs | null; // null = cap diàleg obert
  onTancar: () => void;
  onInscriure: (curs: Curs) => void;
};

export function DetallCurs({ curs, onTancar, onInscriure }: Props) {
  return (
    <Dialog open={curs !== null} onClose={onTancar} fullWidth maxWidth="sm">
      {curs && (
        <>
          <DialogTitle>{curs.nom}</DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label={curs.familia} color="primary" size="small" />
              <Chip
                label={`${curs.hores} hores`}
                size="small"
                variant="outlined"
              />
              <Chip label={curs.modalitat} size="small" variant="outlined" />
            </Stack>
            <DialogContentText>{curs.resum}</DialogContentText>
            <Divider sx={{ my: 2 }}>Programa</Divider>
            <List dense>
              {curs.continguts.map((tema) => (
                <ListItem key={tema}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={tema} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={onTancar}>Tanca</Button>
            <Button variant="contained" onClick={() => onInscriure(curs)}>
              Inscriu-me
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
