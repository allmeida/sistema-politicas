import { Button, Grid, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  fechar(): void;
}

const FormularioPolitica: React.FC<Props> = (props) => {
  const handleClose = () => {
    props.fechar();
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Ótimo"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Bom"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Crítico"
              />
            </Grid>
            <Grid
              item
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
              xs={12}
            >
              <Button
                variant="outlined"
                sx={{ marginRight: '10px' }}
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button variant="contained">Cadastrar</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default FormularioPolitica;
