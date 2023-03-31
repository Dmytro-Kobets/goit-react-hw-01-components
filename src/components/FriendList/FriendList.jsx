import {
  Friend,
  Status,
  AvatarWrapper,
  FriendName,
} from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friend }) => {
  return (
    <Friend className="item">
      <Status isOnline={friend.isOnline} className="status"></Status>
      <AvatarWrapper>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
      </AvatarWrapper>
      <FriendName className="name">{friend.name}</FriendName>
    </Friend>
  );
};

FriendList.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
