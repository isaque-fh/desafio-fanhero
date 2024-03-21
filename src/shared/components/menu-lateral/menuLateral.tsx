import logo from '../../assets/inspire.png'
import {  Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useStyles } from './MenuLateralStyle'
import { Link } from 'react-router-dom';

export const MenuLateral = ({ children }: {children: React.ReactNode}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles()
  
  return (
    <>
      <Drawer  variant={smDown ? 'temporary' : 'permanent'} >
        <Box className={classes.container}>

          <Box  height={theme.spacing(10)} display="flex" alignItems="center" justifyContent="center">
            <img width={theme.spacing(15)} src={logo} alt="logo" />         
          </Box>

          <Box>
            <List component="nav">
              <Link to="/users">
              <ListItemButton className={classes.btn}>
                <ListItemIcon>
                  <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
              </Link>
              
            </List>
            <List component="nav">
              <ListItemButton  className={classes.btn}>
                <ListItemIcon>
                  <PersonAddIcon/>
                </ListItemIcon>
                <ListItemText primary="Create Users" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box marginLeft={smDown ? 0 : theme.spacing(30)}>
        {children}
      </Box>
    </>
  );
};

