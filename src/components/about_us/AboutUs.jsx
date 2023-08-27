import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { Card } from "./component/Card";
import { colorFetch } from "../../styles/functions";

import forecast_icon from "../../assets/images/forecast_icon.svg";
import trust_icon from "../../assets/images/trust_icon.svg";
import vote_icon from "../../assets/images/vote_icon.svg";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    146deg,
    ${colorFetch("secondary")} 25%,
    rgba(235, 245, 244, 0.49) 100%
  );
`;

const ContentWrapper = styled(GlobalWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 130px;
  ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
`;

const Description = styled.p`
  margin-top: 30px;
  max-width: 878px;
  width: 100%;
  ${colorFetch("gray1")};
  text-align: center;
  font-family: "HelveticaNeueCyr", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

const Cards = styled.div`
  margin: 100px 0 114px;
  display: flex;
  gap: 34px;
`;

export const AboutUs = () => {
  const cards = [
    {
      icon: forecast_icon,
      title: "IDAO forecast",
      text: "Позволяет делать прогнозы относительно цены актива за вознаграждение (токены IDAO) и рейтинг (статус).",
    },
    {
      icon: trust_icon,
      title: "IDAO trust",
      text: "Позволяет выбрать стратегию инвестирования и передать средства в доверительное управление с целью получения прибыли.",
    },
    {
      icon: vote_icon,
      title: "IDAO vote",
      text: "Позволяет держателям токенов IDAO совместно принимать ключевые решения и влиять на будущее протокола IDAO.",
    },
  ];

  return (
    <Background>
      <ContentWrapper>
        <Title>Что такое IDAO</Title>
        <Description>
          IDAO - это децентрализованная организация, которая формирует
          сообщество и создает экосистему для монетизации навыков
          прогнозирования, предоставления аналитики и услуг доверительного
          управления криптоактивами.
        </Description>
        <Cards>
          {cards.map(({ icon, title, text }) => (
            <Card icon={icon} title={title} text={text} />
          ))}
        </Cards>
      </ContentWrapper>
    </Background>
  );
};
