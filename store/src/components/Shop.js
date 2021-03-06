import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCart from '@material-ui/icons/AddShoppingCartOutlined';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    margin: '0 auto',
    justifyContent: 'flex-end'
   
  },
});

export default function Shop() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      
     <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
     <BottomNavigationAction label="Adiconar ao Carrinho" icon={<ShoppingCart />} />
    </BottomNavigation>
  );
}
