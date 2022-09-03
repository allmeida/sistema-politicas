import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Relatorio: React.FC = () => {

  return (
    <LayoutBaseDePagina titulo='Relatorios'> 
      <Typography  variant='h6' padding={1}>
        <Box>
          Resumo
        </Box>
      </Typography>
    </LayoutBaseDePagina>
  );
};