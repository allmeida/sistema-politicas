import { Box, Typography } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const UploadArquivo: React.FC = () => {

  return (
    <LayoutBaseDePagina titulo='Upload de arquivo'> 
      <Box flex={1}>
          <Typography  variant='h6' padding={1}>
            Upload de Arquivo
          </Typography>
        </Box>
    </LayoutBaseDePagina>
  );
};