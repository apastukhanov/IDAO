import { styled } from "styled-components";
import { colorFetch } from "../../../styles/functions";

const Content = styled.div`
  max-width: 640px;
  width: 100%;
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  gap: 28px;
`;

const Icon = styled.img``;

const TextContent = styled.div``;

const Title = styled.h3`
  color: ${colorFetch("primary")};
  font-family: "HelveticaNeueCyr";
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: ${colorFetch("gray1")};
  font-family: "HelveticaNeueCyr";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const TextWithIcon = ({ icon, title, description }) => {
  return (
    <Content>
      <Icon src={icon} />
      <TextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
    </Content>
  );
};
