import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeMain from "./pages/HomeMain.jsx"
import ProjectDetail from "./components/ProjectDetail.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
