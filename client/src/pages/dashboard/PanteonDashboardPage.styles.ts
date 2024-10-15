import { createUseStyles } from 'react-jss';
import { px2Rem } from '../../utils/px2Rem';

export const PanteonDashboardPageStyles = createUseStyles({
  input: {
    display: 'flex',
    alignItems: 'center',
    gap: px2Rem(16)
  }
});
