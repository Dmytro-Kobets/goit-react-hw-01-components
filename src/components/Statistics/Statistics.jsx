import { Item, ItemTitle, ItemPercentage } from './StatisticsList.styled';

export const Statistics = ({ stat }) => {
  return (
    <Item className="item">
      <ItemTitle className="label">{stat.label}</ItemTitle>
      <ItemPercentage className="percentage">{stat.percentage}%</ItemPercentage>
    </Item>
  );
};
