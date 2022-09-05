import { Button, Grid, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

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
  close(): void;
}

const FormularioPolitica: React.FC<Props> = (props) => {
  const [fields, setFields] = useState({
    otimo: 0,
    bom: 0,
    critico: 0,
  });

  const changeField = (nameField: string, value: unknown) => {
    setFields({ ...fields, [nameField]: value });
  };

  const handleClose = () => {
    props.close();
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
            {JSON.stringify(fields)}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Ótimo"
                value={fields.otimo}
                onChange={function (event) {
                  changeField('otimo', event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Bom"
                value={fields.bom}
                onChange={function (event) {
                  changeField('bom', event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Crítico"
                value={fields.critico}
                onChange={function (event) {
                  changeField('critico', event.target.value);
                }}
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
