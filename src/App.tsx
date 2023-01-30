import "./App.css";
import Location from "./Location";
import { AppShell, Navbar } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Root from "./Root";

function App() {
  return (
    <AppShell
      navbar={
        <Navbar width={{ base: 200 }} height="100vh">
          {/* Navbar Content */}
        </Navbar>
      }
    >
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/locations/:id" element={<Location />} />
      </Routes>
    </AppShell>
  );
}

export default App;
