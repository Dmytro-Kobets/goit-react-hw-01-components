import { FriendList } from './FriendList';
import { StyledFriendList } from './FriendsList.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <StyledFriendList className="friend-list">
      {friends.map(friend => {
        return <FriendList key={friend.id} friend={friend} />;
      })}
    </StyledFriendList>
  );
};
