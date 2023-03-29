import {
  Wrapper,
  Avatar,
  Name,
  Tag,
  Location,
  Description,
  StatsList,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ profiles }) => {
  return (
    <Wrapper className="profile">
      <Description className="description">
        <Avatar src={profiles.avatar} alt="User avatar" className="avatar" />
        <Name className="name">{profiles.username}</Name>
        <Tag className="tag">@{profiles.tag}</Tag>
        <Location className="location">{profiles.location}</Location>
      </Description>

      <StatsList className="stats">
        <Stats>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{profiles.stats.followers}</Quantity>
        </Stats>
        <Stats>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{profiles.stats.views}</Quantity>
        </Stats>
        <Stats>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{profiles.stats.likes}</Quantity>
        </Stats>
      </StatsList>
    </Wrapper>
  );
};
