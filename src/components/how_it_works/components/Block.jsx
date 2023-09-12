import { styled } from "styled-components";
import { colorFetch } from "../../../styles/functions";
import hexagon_green from "../assets/hexagon_green.svg";
import hexagon_empty from "../assets/hexagon_empty.svg";
import { IconWithText } from "./IconWithText";

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 49px 1fr;
  gap: 26px;

  &::before {
    content: "";
    position: absolute;
    top: 54px;
    left: calc(49px / 2);
    width: 1px;
    height: calc(100% - 54px);
    background-color: ${colorFetch("gray3")};
  }

  &.green {
    &::before {
      background-color: ${colorFetch("green")};
    }
  }
`;

const Number = styled.div`
  width: 49px;
  height: 54px;
  background: url(${hexagon_empty}) center center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorFetch("gray3")};

  &.green {
    background: url(${hexagon_green}) center center no-repeat;
    color: white;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  min-height: 462px;
  gap: 90px;
`;

const FirstPart = styled.div`
  max-width: 475px;
  margin-bottom: 70px;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  height: 54px;
  color: ${colorFetch("green")};
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
`;

const Title = styled.h3`
  color: ${colorFetch("primary")};
  font-family: Inter;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  margin-bottom: 70px;
`;

const Description = styled.p`
  color: ${colorFetch("gray1")};
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 22px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SecondPart = styled.div`
  flex: 1;
`;

const Video = styled.video`
  border: 1px solid ${colorFetch("gray4")};
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 640/462;
`;

export const Block = ({ index, label, title, description, list, video }) => {
  return (
    <Wrapper className={`${!index && "green"}`}>
      <Number className={`${!index && "green"}`}>{index + 1}</Number>
      <Content>
        <FirstPart>
          <Label>{label}</Label>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <List>
            {list.map(({ icon, text }) => (
              <IconWithText icon={icon} text={text} />
            ))}
          </List>
        </FirstPart>
        <SecondPart>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </SecondPart>
      </Content>
    </Wrapper>
  );
};
