import StatItem from './StatItem';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statisticsContainer}>
      {title && <h2 className={css.statTitle}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <StatItem
            key={item.id}
            statLabel={item.label}
            statPercentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
