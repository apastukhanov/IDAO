import styled from "styled-components";
import { media } from "../styles/media";

const MainBlock = styled.div`
  font-size: 34px;
`;

const Title = styled.h1`
  color: red;
  ${media.tablet`
    color: primary;
    padding: 0 30px;
  `}
`;

export const App = () => {
  return (
    <MainBlock>
      <Title>HELLO WORLD</Title>
    </MainBlock>
  );
};
