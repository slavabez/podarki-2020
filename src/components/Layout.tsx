import * as React from "react";
import styled from "styled-components";
import MapIcon from "../../media/svgs/map_icon.svg";

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
  background: linear-gradient(181.06deg, #e3b4f0 -5.78%, #50b5ff 136.34%);
`;

const AddressBlock = styled.div``;
const AddressTopSection = styled.div``;

const Layout = (props) => {
  return (
    <SiteWrapper>
      <Header>
        <SiteTitle>Сказка</SiteTitle>
      </Header>

      <Main>{props.children}</Main>

      <Footer>Adresa</Footer>
    </SiteWrapper>
  );
};

export default Layout;
