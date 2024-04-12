import { Route } from "react-router-dom";
import Projects from "./Projects";

const projectRoutes = [
  <Route key="projects" path="/projects">
    <Route index element={<Projects />} />
  </Route>,
];

export default projectRoutes;
