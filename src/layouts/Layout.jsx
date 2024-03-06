import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styled from "styled-components";
import { Hero, Projects } from "../components";
import { CardInner } from "./CardInner";
import { CardWrap } from "./CardWrap";

const ProfileCard = styled.div`
  @media (min-width: 64em) {
    flex: 1 0 40%;
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <ProfileCard>
          <Hero />
        </ProfileCard>

        <CardInner>
          <CardWrap>
            <Outlet />
          </CardWrap>
        </CardInner>
      </main>
    </>
  );
};

export default Layout;
