import { styled } from "styled-components";
import { ButtonState, GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { ReactComponent as IDAOLogoIcon } from "../../assets/images/IDAO_logo.svg";
import { links } from "../../data/data";
import { useState } from "react";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colorFetch("primary")};
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 95px;
  padding-bottom: 55px;
`;

const FirstLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
`;

const Link = styled.span`
  cursor: pointer;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
`;

const ContactForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colorFetch("secondary")};
  border-radius: 999px;
`;

const Input = styled.input`
  height: 16px;
  background-color: transparent;
  border: none;
  outline: transparent;
  margin: 10px 10px 10px 20px;
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
  color: ${colorFetch("secondary")};

  &::placeholder {
    color: ${colorFetch("secondary2")};
  }
`;

const Button = styled(ButtonState)`
  padding: 10px 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colorFetch("secondary")};
  margin: 125px 0 45px;
`;

const SecondLine = styled.div``;

const AuthorRights = styled.span`
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Description = styled.p`
  color: ${colorFetch("secondary2")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  max-width: 520px;
`;

export const Footer = () => {
  const [email, setEmail] = useState("Email");

  const onClickHandler = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email in the request body
      });

      if (response.ok) {
        console.log('Subscription successful');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Background>
      <ContentWrapper>
        <FirstLine>
          <IDAOLogoIcon />
          <Links>
            {links.map(({ text }) => (
              <Link>{text}</Link>
            ))}
          </Links>
          <ContactForm>
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email"
            />
            <Button className={"whiteBgc"} onClick={onClickHandler}>Подписаться</Button>
          </ContactForm>
        </FirstLine>
        <Line />
        <SecondLine>
          <AuthorRights>© 2023 IDAO Platform, Inc.</AuthorRights>
          <Description>
            IDAO Platform, Inc. — это финансовая технологическая компания, а не
            банк. Банковские услуги предоставляются банками-партнерами.
          </Description>
        </SecondLine>
      </ContentWrapper>
    </Background>
  );
};
