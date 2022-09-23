import React from 'react';
import clsx from 'clsx';
import
{
  useTheme,
  Drawer,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
  Avatar,
  Zoom
}
from '@material-ui/core';
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faHome,
  faUserMd,
  faCalendarAlt,
  faHospitalUser,
  faUserCircle,
  faUser,
  faFileAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sideBarStyles, StyledListItem } from './side-bar.styles';

const SideBarView = (props) => {
  const classes = sideBarStyles();
  const theme = useTheme();

  const {
    open,
    handleClose,
    submenu,
    goHome,
    goMeetings,
    goConsultation,
    goDoctors,
    goLogin,
    user,
    goSignOut,
    handleOpenSubmenu
  } = props;

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleClose}>
            {
              theme.direction === 'rtl'
              ?
              <FontAwesomeIcon icon={faChevronRight} className={classes.icon} />
              :
              <FontAwesomeIcon icon={faChevronLeft} className={classes.icon} />
            }
          </IconButton>
        </div>
        <>
          <Divider />
          <List>
            <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Inicio" : "" }>
              <StyledListItem onClick={goHome} button>
                <ListItemIcon><FontAwesomeIcon icon={faHome} className={classes.icon} /></ListItemIcon>
                <ListItemText primary='Inicio' />
              </StyledListItem>
            </Tooltip>
            {
              user !== undefined
              ?
              user.type === 1
              ?
              <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Médicos" : "" }>
                <StyledListItem onClick={goDoctors} button>
                  <ListItemIcon><FontAwesomeIcon icon={faUserMd} className={classes.icon} /></ListItemIcon>
                  <ListItemText primary='Médicos' />
                </StyledListItem>
              </Tooltip>
              :
              null
              :
              <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Médicos" : "" }>
                <StyledListItem onClick={goDoctors} button>
                  <ListItemIcon><FontAwesomeIcon icon={faUserMd} className={classes.icon} /></ListItemIcon>
                  <ListItemText primary='Médicos' />
                </StyledListItem>
              </Tooltip>
            }

            {
              user !== undefined
              ?
              user.type === 1
              ?
              <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Citas" : "" }>
              <StyledListItem onClick={goMeetings} button>
                <ListItemIcon><FontAwesomeIcon icon={faCalendarAlt} className={classes.icon} /></ListItemIcon>
                <ListItemText primary='Citas' />
              </StyledListItem>
            </Tooltip>
            :
            <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Citas" : "" }>
            <StyledListItem onClick={goMeetings} button>
              <ListItemIcon><FontAwesomeIcon icon={faCalendarAlt} className={classes.icon} /></ListItemIcon>
              <ListItemText primary='Citas' />
            </StyledListItem>
          </Tooltip>
          :
          null
            }
            {
              user !== undefined
              ?
              user.type === 1
              ?
              <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Consultas" : "" }>
              <StyledListItem onClick={goConsultation} button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faHospitalUser} className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary='Consultas' />
              </StyledListItem>
            </Tooltip>
            : 
            <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Consultas" : "" }>
            <StyledListItem onClick={goConsultation} button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faHospitalUser} className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Consultas' />
            </StyledListItem>
          </Tooltip>
          :
          null
          }
          </List>
          <Divider />
          <List>
            <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Cuenta" : "" }>
              <StyledListItem button onClick={handleOpenSubmenu}>
                {
                  user === undefined
                  ?
                  <>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faUserCircle} className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary='Cuenta' />
                  </>
                  :
                  <>
                    <ListItemIcon>
                      <Avatar src={user.image}/>
                    </ListItemIcon>
                    <ListItemText primary={user.firstName} />
                  </>
                }
                {
                  submenu
                  ?
                  <FontAwesomeIcon icon={faChevronUp} className={classes.icon} />
                  :
                  <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                }
              </StyledListItem>
            </Tooltip>
            <Collapse in={submenu} timeout="auto" unmountOnExit>
              {
                user === undefined
                ?
                <List component="div" disablePadding>
                  <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Iniciar sesión" : "" }>
                    <StyledListItem button className={classes.nested} onClick={goLogin}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faUser} className={classes.icon} />
                      </ListItemIcon>
                      <ListItemText primary="Iniciar sesión" />
                    </StyledListItem>
                  </Tooltip>
                  <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Registrarse" : "" }>
                    <StyledListItem button className={classes.nested}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faFileAlt} className={classes.icon} />
                      </ListItemIcon>
                      <ListItemText primary="Registrarse" />
                    </StyledListItem>
                  </Tooltip>
                </List>
                :
                <List component="div" disablePadding>
                  <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Mi perfil" : "" }>
                    <StyledListItem button className={classes.nested} onClick={goLogin}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faUser} className={classes.icon} />
                      </ListItemIcon>
                      <ListItemText primary="Mi perfil" />
                    </StyledListItem>
                  </Tooltip>
                  <Tooltip placement="bottom" TransitionComponent={Zoom} title={ !open ? "Cerrar sesión" : "" }>
                    <StyledListItem onClick={goSignOut} button className={classes.nested}>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faSignOutAlt} className={classes.icon} />
                      </ListItemIcon>
                      <ListItemText primary="Cerrar sesión" />
                    </StyledListItem>
                  </Tooltip>
                </List>
              }
            </Collapse>
          </List>
        </>
      </Drawer>
    </>
  );
}

export default SideBarView;
