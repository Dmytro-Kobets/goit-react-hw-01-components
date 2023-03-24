import { FriendList } from './FriendList';

export const FriendListItem = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendList key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};
