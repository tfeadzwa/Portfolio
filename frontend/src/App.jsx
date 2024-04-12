import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react"; // Import lazy from react
import Layout from "./layouts/Layout";
import AnimatedCursor from "react-animated-cursor";
import projectRoutes from "./components/projects/projectRoutes";
import Loader from "./components/loading/Loader";
import "./icons";
import { MyProvider } from "./provider/MyContext";

const Home = lazy(() => import("./components/home/Home"));
const Articles = lazy(() => import("./components/articles/Articles"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Resume = lazy(() => import("./components/resume/Resume"));
const About = lazy(() => import("./components/about/About"));

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate an API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

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
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </MyProvider>
      </div>
    </>
  );
}

export default App;
