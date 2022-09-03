import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      dark: '#002884',
      light: blue[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f6f3',
    }
  }
});