import { Statistics } from './Statistics';

export const StatisticsList = ({ statistics }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul>
        {statistics.map(stat => (
          <Statistics key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
};
