import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border: 3px solid black; */

  text-align: center;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(199, 199, 199, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: grey;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Location = styled.p`
  color: grey;
  font-size: 18px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgba(243, 246, 249);
  border-top: 1px solid rgba(199, 199, 199, 0.75);
`;

export const Stats = styled.li`
  padding: 15px 15px;
  &:not(:last-child) {
    border-right: 1px solid rgba(199, 199, 199, 0.75);
  }
`;

export const Label = styled.p`
  color: grey;
  font-size: 16px;
`;

export const Quantity = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
