import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import AnimatedCursor from "react-animated-cursor";
import projectRoutes from "./components/projects/projectRoutes";
import "./icons";
import { MyProvider } from "./provider/MyContext";
import {
  Home,
  Profile,
  About,
  Resume,
  Contact,
  Articles,
  Loader,
} from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="App" style={{ height: "100dvh" }}>
        <AnimatedCursor
          innerSize={8}
          outerSize={28}
          innerScale={1}
          outerScale={3}
          outerAlpha={0.5}
          showSystemCursor="true"
          trailingSpeed={15}
          outerStyle={{
            backgroundColor: "transparent",
            border: "1px solid var(--cursor-color)",
          }}
          innerStyle={{
            backgroundColor: "transparent",
            // backgroundColor: "var(--cursor-color)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />

        <MyProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />

              <Route path="/">
                <Route index element={<Profile />} />
                <Route path="about" element={<About />} />
                <Route path="resume" element={<Resume />} />

                {projectRoutes}
                <Route path="articles" element={<Articles />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Route>
          </Routes>
        </MyProvider>
      </div>
    </>
  );
}

export default App;
