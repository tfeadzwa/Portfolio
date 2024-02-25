import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./layouts/Layout";
import { Contacts, Experience, Hero, Projects } from "./components";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
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
          backgroundColor: "var(--cursor-color)",
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

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="/">
            <Route index element={<Hero />} />
            <Route path="hero" element={<Hero />} />
            <Route path="skills" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
