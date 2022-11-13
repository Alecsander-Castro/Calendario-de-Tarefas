import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
//Components
import Task from "./pages/Task";
import Tasks from "./pages/Tasks";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/edit/:id" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
