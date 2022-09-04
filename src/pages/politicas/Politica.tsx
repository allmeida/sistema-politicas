import {
  Box,
  Button,
  Paper,
  styled,
  Table,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts';
import FormularioPolitica from './FormularioPolitica';
import CreateModal from './Modal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Politica: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleShowModal = () => {
    setOpen(true);
  };

  const fechar = () => {
    setOpen(false);
  };

  return (
    <LayoutBaseDePagina titulo="Políticas">
      <Box display="flex" alignItems="center" component={Paper}>
        <Box flex={1}>
          <Typography variant="h6" padding={1}>
            Política de estoque
          </Typography>
        </Box>
        <Box flex={1} display="flex" justifyContent="center">
          <Button variant="contained" onClick={handleShowModal}>
            CADASTRAR POLITICA DE ESTOQUE
          </Button>
          <FormularioPolitica open={open} fechar={fechar} />
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: 'auto' }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ótimo</StyledTableCell>
              <StyledTableCell>Bom</StyledTableCell>
              <StyledTableCell>Crítico</StyledTableCell>
              <StyledTableCell width={100}>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  );
};
