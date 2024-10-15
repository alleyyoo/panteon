import { createUseStyles } from 'react-jss';
import { px2Rem } from '../../utils/px2Rem';

export const PanteonNavbarStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: px2Rem(16)
  }
});
