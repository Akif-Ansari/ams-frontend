import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/auth/Homepage";
import AdminpanelS from "./components/student/AdminpanelS";
import AdminPanel from "./components/teacher/AdminPanel";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/stdpanel" element={<AdminpanelS />} />
        <Route path="/teachpanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
