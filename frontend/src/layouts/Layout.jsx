import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styled from "styled-components";
import { Profile, Projects } from "../components";
import { CardInner } from "./CardInner";
import { CardWrap } from "./CardWrap";

const ProfileCard = styled.div`
  @media (min-width: 64em) {
    flex: 1 0 30%;
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <main className="container">
          <ProfileCard>
            <Profile />
          </ProfileCard>

          <CardInner>
            <CardWrap>
              <Outlet />
            </CardWrap>
          </CardInner>
        </main>
      </div>
    </>
  );
};

export default Layout;
