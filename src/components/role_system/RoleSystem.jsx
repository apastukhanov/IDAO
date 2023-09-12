import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import backgroundGradient from "../../assets/backgrounds/role_system_bg.svg";
import { ReactComponent as BackgroundImage } from "../../assets/backgrounds/role_system_bg_image.svg";
import control_icon from "./assets/control_icon.svg";
import roleSystem_icon from "./assets/roleSystem_icon.svg";
import { TextWithIcon } from "./components/TextWithIcon";

const Background = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledBackgroundGradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  z-index: 1;
  left: -24px;
  bottom: 0;
`;

const ContentWrapper = styled(GlobalWrapper)`
  z-index: 2;
  padding-top: 130px;
  padding-bottom: 100px;
`;

const FirstPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 210px;
`;

const Title = styled.h2`
  max-width: 490px;
  width: 100%;
  color: ${colorFetch("primary")};
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 72px;
`;

const Description = styled.p`
  max-width: 640px;
  width: 100%;
  color: ${colorFetch("primary")};
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 22px;
`;

const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
`;

export const RoleSystem = () => {
  const data = [
    {
      icon: control_icon,
      title: "Контроль",
      description:
        "IDAO в полной мере контролируется владельцами токенов IDAO. Они влияют на направление развития протокола и определяют его основные параметры, которые обеспечивают финансовую стабильность.",
    },
    {
      icon: roleSystem_icon,
      title: "Ролевая система",
      description:
        "IDAO имеет ролевую систему, в основе которой стоят директора, которые вносят предложения на рассмотрение сообщества, а сообщество решает принять или отклонить предложение путем голосования.",
    },
  ];

  return (
    <Background>
      <ContentWrapper>
        <FirstPart>
          <Title>DAO и ролевая система</Title>
          <Description>
            Децентрализованная автономная организация (DAO) - это организация,
            существующая в блокчейне и функционирующая на базе смарт-контрактов
            и токена управления, что позволяет участникам принимать решения и
            управлять организацией без центрального контрагента (органа).
          </Description>
        </FirstPart>
        <SecondPart>
          {data.map(({ icon, title, description }) => (
            <TextWithIcon icon={icon} title={title} description={description} />
          ))}
        </SecondPart>
      </ContentWrapper>
      <StyledBackgroundGradient src={backgroundGradient} />
      <StyledBackgroundImage />
    </Background>
  );
};
