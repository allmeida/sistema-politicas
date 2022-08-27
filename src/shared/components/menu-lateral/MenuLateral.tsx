import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';


export const MenuLateral = ({ children }: {children:ReactNode}) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(4)} display="flex" alignItems="center" justifyContent="center">
          
            <Box>
              Modulo do Sistema
            </Box>
          
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">

              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Upload de Arquivos" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Relatórios" />
              </ListItemButton>
              
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Políticas" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};