import styled from 'styled-components';

export const StatisticsSection = styled.div`
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.51);
  display: inline-block;
`;

export const TitleWrapper = styled.div`
  padding: 40px 150px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 34px;
  color: #72777b;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Item = styled.li`
  background-color: black;
  padding: 10px 10px;
  text-align: center;
  color: white;
  width: calc(100% / 5);
  &:first-child {
    background-color: #50c4f7;
  }
  &:nth-child(2) {
    background-color: #a33cf2;
  }
  &:nth-child(3) {
    background-color: #e84b67;
  }
  &:nth-child(4) {
    background-color: #21b7c5;
  }
  &:last-child {
    background-color: #79bf8e;
  }
`;

export const ItemTitle = styled.p`
  font-size: 16px;
`;

export const ItemPercentage = styled.p`
  font-size: 34px;
`;
