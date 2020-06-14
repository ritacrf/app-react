import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ImgMediaCard from './ImgMediaCard';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function ItensShoppingCart(props) {
  const classes = useStyles();
  //   const [state, setState] = React.useState({
  //     left: false
  //   });

  //   const toggleDrawer = (open) => (event) => {
  //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //       return;
  //     }

  //     setState({ ...state, left: open });
  //   };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={props.funcaoExibirCarrinho}
      onKeyDown={props.funcaoExibirCarrinho}
    >

      <List>

        <ListItem button key={text}>
          <ImgMediaCard titulo="Ramone" descricao="Pixar" image="/statics/imagens/Ramone.png" />
        </ListItem>

      </List>
    </div>
  );

  const anchor = 'right'
  return (
    <div>

      {
        <React.Fragment key={anchor}>
          <Button onClick={props.funcaoExibirMenu}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={props.exibirCarrinho}
            onClose={props.funcaoCarrinho}
            onOpen={props.funcaoExibirCarrinho}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
