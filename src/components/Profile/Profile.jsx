export const Profile = ({ profiles }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={profiles.avatar} alt="User avatar" className="avatar" />
        <p className="name">{profiles.username}</p>
        <p className="tag">{profiles.tag}</p>
        <p className="location">{profiles.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{profiles.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{profiles.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{profiles.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
