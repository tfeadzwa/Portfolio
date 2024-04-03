import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styled from "styled-components";
import { Profile } from "../components";
import { CardInner } from "./CardInner";
import { CardWrap } from "./CardWrap";
import Certificate from "../components/resume/Certificate";

import { useMyContext } from "../provider/useMyContext";

const ProfileCard = styled.div`
  @media (min-width: 64em) {
    flex: 1 0 30%;
  }
`;

const Layout = () => {
  const { imgOpen } = useMyContext();
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

          {imgOpen && <Certificate />}
        </main>
      </div>
    </>
  );
};

export default Layout;
