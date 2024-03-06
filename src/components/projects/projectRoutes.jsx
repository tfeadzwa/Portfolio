import { Route } from "react-router-dom";
import Projects from "./Projects";
import All from "./All";
import Videos from "./Videos";

const projectRoutes = [
  <Route key="projects" path="/projects">
    <Route index element={<Projects />} />
    <Route path="all" element={<All />} />
    <Route path="videos" element={<Videos />} />
  </Route>,
];

export default projectRoutes;
