import { Button } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { Wrapper, CaixaUpload } from './styles';

export const UploadArquivo: React.FC = () => {
  return (
    <LayoutBaseDePagina titulo="Upload de arquivo">
      <Wrapper>
        <CaixaUpload>
          <p>Estoque Principal</p>
          <label htmlFor="arquivo">Click para fazer upload</label>
          <input accept=".csv" type="file" id="arquivo" />
        </CaixaUpload>
        <div>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>
            CANCELAR
          </Button>
          <Button variant="contained" sx={{ background: '#d50000' }}>
            ENVIAR ARQUIVO
          </Button>
        </div>
      </Wrapper>
    </LayoutBaseDePagina>
  );
};

export default UploadArquivo;
