import {
  Friend,
  Status,
  AvatarWrapper,
  FriendName,
} from './FriendsList.styled';

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
