import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as IDAOLogoIcon } from "../../assets/images/IDAO_logo.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/wallet.svg";
import { ButtonState, GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { links } from "../../data/data";

const Background = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 120px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &.scrolled {
    background-color: rgb(9 54 63 / 80%);
    backdrop-filter: blur(20px);
  }
`;

const ContentWrapper = styled(GlobalWrapper)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledIDAOLogoIcon = styled(IDAOLogoIcon)`
  margin-right: 84px;
`;

const Links = styled.div`
  flex: 1;
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

const WalletBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const SignIn = styled.span`
  cursor: pointer;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled(ButtonState)``;

const ButtonText = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Header = () => {
  const [visibleHeader, setVisibleHeader] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.currentTarget.scrollY > 50) {
        setVisibleHeader(true);
      } else {
        setVisibleHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Background className={visibleHeader && "scrolled"}>
      <ContentWrapper>
        <StyledIDAOLogoIcon />
        <Links>
          {links.map(({ text }) => (
            <Link>{text}</Link>
          ))}
        </Links>
        <WalletBlock>
          <SignIn>Войти</SignIn>
          <Button className="border white">
            <WalletIcon />
            <ButtonText>Подключить кошелек</ButtonText>
          </Button>
        </WalletBlock>
      </ContentWrapper>
    </Background>
  );
};
