import css from './Statistics.module.css';
import { getRandomHexColor } from './getRandomHexColor';

const StatItem = ({ statLabel, statPercentage }) => {
  return (
    <li
      className={css.statItem}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.statLabel}>{statLabel}</span>
      <span className={css.statPercentage}>{statPercentage}%</span>
    </li>
  );
};

export default StatItem;
