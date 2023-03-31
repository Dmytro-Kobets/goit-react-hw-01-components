import { Item, ItemTitle, ItemPercentage } from './StatisticsList.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stat }) => {
  return (
    <Item className="item">
      <ItemTitle className="label">{stat.label}</ItemTitle>
      <ItemPercentage className="percentage">{stat.percentage}%</ItemPercentage>
    </Item>
  );
};

Statistics.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
