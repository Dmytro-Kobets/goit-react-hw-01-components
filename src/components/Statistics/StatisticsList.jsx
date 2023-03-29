import { Statistics } from './Statistics';
import {
  StatisticsSection,
  TitleWrapper,
  Title,
  List,
} from './StatisticsList.styled';

export const StatisticsList = ({ statistics }) => {
  return (
    <StatisticsSection className="statistics">
      <TitleWrapper>
        <Title className="title">Upload stats</Title>
      </TitleWrapper>
      <List>
        {statistics.map(stat => (
          <Statistics key={stat.id} stat={stat} />
        ))}
      </List>
    </StatisticsSection>
  );
};
