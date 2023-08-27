import { styled } from "styled-components";
import { borderRadiusFetch, colorFetch } from "../../../styles/functions";

const Block = styled.div`
  flex: 1;
  background-color: ${colorFetch("white")};
  padding: 44px 32px;
  border-radius: ${borderRadiusFetch("radius8")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img``;

const Title = styled.h3`
  margin-top: 44px;
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-weight: 500;
`;

const Description = styled.p`
  margin-top: 20px;
  color: ${colorFetch("gray2")};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const Card = ({ icon, title, text }) => {
  return (
    <Block>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Description>{text}</Description>
    </Block>
  );
};
