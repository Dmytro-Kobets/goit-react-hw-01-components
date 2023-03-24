export const FriendList = ({ friend }) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};
