import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./layouts/Layout";
import { Contacts, Experience, Hero, Projects } from "./components";

function App() {
  return (
    <div className="App">
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
