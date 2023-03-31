import { Statistics } from './Statistics';
import {
  StatisticsSection,
  TitleWrapper,
  Title,
  List,
} from './StatisticsList.styled';

export const StatisticsList = ({ statistics, title }) => {
  return (
    <StatisticsSection className="statistics">
      {title && (
        <TitleWrapper>
          <Title className="title">{title}</Title>
        </TitleWrapper>
      )}

      <List>
        {statistics.map(stat => (
          <Statistics key={stat.id} stat={stat} />
        ))}
      </List>
    </StatisticsSection>
  );
};
