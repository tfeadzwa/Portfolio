import styled from "styled-components";
import SunspotLoader from "./SunspotLoader";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(26, 32, 44, 0.85);
`;

const Loader = () => {
  return (
    <Section>
      <SunspotLoader
        // gradientColors={["#6366F1", "#E0E7FF"]}
        gradientColors={["#4caf51"]}
        // shadowColor={"#3730A3"}
        shadowColor={"#3730A3"}
        desktopSize={"50px"}
        mobileSize={"40px"}
      />
    </Section>
  );
};

export default Loader;
