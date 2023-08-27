import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled(GlobalWrapper)``;

export const RoadMap = () => {
  return (
    <Background>
      <ContentWrapper></ContentWrapper>
    </Background>
  );
};
