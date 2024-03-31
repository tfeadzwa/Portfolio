import SunspotLoader from "./SunspotLoader";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        backgroundColor: "rgba(26, 32, 44, 0.85)",
      }}
    >
      <SunspotLoader
        // gradientColors={["#6366F1", "#E0E7FF"]}
        gradientColors={["#4caf51"]}
        // shadowColor={"#3730A3"}
        shadowColor={"#3730A3"}
        desktopSize={"50px"}
        mobileSize={"40px"}
      />
    </div>
  );
};

export default Loader;
