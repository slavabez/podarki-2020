import * as React from "react";
import styled from "styled-components";
const mapIcon = require("../../media/svgs/map_icon.svg") as string;

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

const Header = styled.header`
  background-image: linear-gradient(
    95.38deg,
    #ff77fa -15.29%,
    #e181fa 3.44%,
    #7ba5fe 67.52%,
    #4eb5ff 95.64%
  );
  padding: 1rem;
  border-bottom-left-radius: 89px;
  border-bottom-right-radius: 89px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const SiteTitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: white;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  width: 100%;
  background: linear-gradient(91.06deg, #e3b4f0 -5.78%, #50b5ff 136.34%);
`;

const AddressBlock = styled.div`
  padding: 1rem;
`;

const AddressTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 0.5rem;

  address {
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
  }
`;
const AddressIconContainer = styled.div`
  padding: 0.25rem;
`;
const AddressTextContainer = styled.div``;

const AddressBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  address {
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;

    padding: 0.2rem 0;

    a {
      color: white;
    }
  }
`;
const LeftHalf = styled.div``;
const Divider = styled.div`
  width: 2px;
  min-height: 45px;
  background-color: white;
  margin: 0 0.5rem;
`;
const RightHalf = styled.div``;

const Layout = (props) => {
  return (
    <SiteWrapper>
      <Header>
        <SiteTitle>Сказка</SiteTitle>
      </Header>

      <Main>{props.children}</Main>

      <Footer>
        <AddressBlock>
          <AddressTop>
            <AddressIconContainer>
              <img src={mapIcon} alt="Karta" />
            </AddressIconContainer>
            <AddressTextContainer>
              <address>Сказка ждёт вас:</address>
              <address>г. Кокшетау, Ауэзова 191/1</address>
            </AddressTextContainer>
          </AddressTop>
          <AddressBottom>
            <LeftHalf>
              <address>пн-пт: 9:00 - 18:00</address>
              <address>сб-вс: выходной</address>
            </LeftHalf>
            <Divider />
            <RightHalf>
              <address>
                тел: <a href="tel:+7 7162 254545">25-45-45</a>
              </address>
              <address>
                <a href="tel:+7 (7162) 25-67-25">+7 (7162) 25-67-25</a>
              </address>
            </RightHalf>
          </AddressBottom>
        </AddressBlock>

        <AddressBlock>
          <AddressTop>
            <AddressIconContainer>
              <img src={mapIcon} alt="Karta" />
            </AddressIconContainer>
            <AddressTextContainer>
              <address>Сказка ждёт вас:</address>
              <address>г. Костанай, Карбышева 117</address>
            </AddressTextContainer>
          </AddressTop>
          <AddressBottom>
            <LeftHalf>
              <address>пн-пт: 9:00 - 18:00</address>
              <address>сб-вс: выходной</address>
            </LeftHalf>
            <Divider />
            <RightHalf>
              <address>
                тел: <a href="tel: +7 7142 392427">39-24-27</a>
              </address>
              <address>
                <a href="tel:+7 777 538 0260">+7 777 538 0260</a>
              </address>
            </RightHalf>
          </AddressBottom>
        </AddressBlock>
      </Footer>
    </SiteWrapper>
  );
};

export default Layout;
