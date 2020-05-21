import React from 'react';
import{ AppBar, CssBaseline, Drawer, Hidden, IconButton, ListItemText, MenuItem, ListItemIcon, MenuList, Toolbar, Typography, Divider }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';
import Todos from '../Todos/Todos.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
    paddingTop: theme.mixins.toolbar.minHeight + 13,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.mixins.toolbar.minHeight + 40,
    maxWidth: 920,
    margin: '0 auto',
    textAlign: 'center',
  },
  menuitem: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  var fun = (sum, obj) => {
     let n = obj.checked ? 0 : 1;
     return sum + n;
   }
  var number = props.todos.reduce(fun , 0);
  const drawer = (
    <MenuList style={{outline: 'none'}}>
       <MenuItem component={Link} to={'/home'} className={classes.menuitem}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
       </MenuItem>
       <Divider />
       <MenuItem component={Link} to={'/todos'} className={classes.menuitem}>
          <ListItemIcon>
            <Badge badgeContent={number} color="secondary">
                <FormatListNumberedIcon />
              </Badge>
          </ListItemIcon>
          <ListItemText primary={'Todos'} />
       </MenuItem>
    </MenuList>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create React App with Material UI, ES6, Redux and Routing
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
           >
            {drawer}
          </Drawer>
        </Hidden>

      </nav>
      <main className={classes.content}>

          <Switch>
            <Route path='/todos' component={Todos}/>
            <Route path='/home' render={() => (
              <Typography variant="h5" style={{margin: '0 auto'}}>
                Welcome to "TODO" web app!
              </Typography>
            )}/>
            <Redirect to='/home' />
          </Switch>


      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(ResponsiveDrawer);
