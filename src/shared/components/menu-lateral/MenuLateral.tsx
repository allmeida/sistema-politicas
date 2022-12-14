import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext } from '../../contexts';

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick}) => {
  const navigate = useNavigate();

  const resolvePath = useResolvedPath(to);
  const match = useMatch({ path: resolvePath.pathname, end: false});

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral = ({ children }: {children:ReactNode}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } =  useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box width="100%" height={theme.spacing(8)} display="flex" alignItems="center" justifyContent="center">
            
            <Box>
              <Typography variant='h6'>
                Modulo do Sistema
              </Typography>
            </Box>
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOptions => (
                <ListItemLink
                  to={drawerOptions.path}
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};