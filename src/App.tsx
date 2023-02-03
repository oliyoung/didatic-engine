import "./App.css";
import Project from "./Project";
import { Route, Routes } from "react-router-dom";
import Root from "./Root";
import NewProject from "./NewProject";

function App() {
  return (
    <Routes>
      <Route path="/projects/new" element={<NewProject />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="/" element={<Root />} />
    </Routes>
  );
}

export default App;
