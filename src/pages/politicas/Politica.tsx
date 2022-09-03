import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Politica: React.FC = () => {

  return (
    <LayoutBaseDePagina titulo='Relatorios'> 
      <Typography  variant='h6' padding={1}>
        <Box>
          Politica
        </Box>
      </Typography>
    </LayoutBaseDePagina>
  );
};