import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styled from "styled-components";
import { Hero } from "../components";

const Div = styled.div`
  @media (min-width: 64em) {
    overflow-y: auto;
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Div>
          <Outlet />
        </Div>
      </main>
    </>
  );
};

export default Layout;
