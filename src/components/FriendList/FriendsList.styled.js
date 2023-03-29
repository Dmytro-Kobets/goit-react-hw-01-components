import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: inline-block;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  padding: 10px 10px;
  padding-right: 100px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.div`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: auto 10px;
`;

export const AvatarWrapper = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(199, 199, 199, 0.75);
`;

export const FriendName = styled.p`
  font-size: 24px;
  padding-left: 10px;
  font-weight: 500;
`;
