import { Card } from 'antd';
import { PanteonNavbarStyles } from './PanteonNavbar.styles';

export const PanteonNavbar = () => {
  const classes = PanteonNavbarStyles();
  return (
    <Card className={classes.root}>
      <img
        src='https://www.panteon.games/wp-content/themes/panteon/assets/img/logo@2x.png'
        alt='Panteon'
        width={200}
      />
    </Card>
  );
};
