import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from "./Components/SideBar"; // Ensure correct path
import ViewAttachments from "./Components/ViewAttachments";
import Quotes from "./Components/Quotes"; // Ensure correct path
import TCondition from "./Components/TCondition";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/tcondition" element={<TCondition />} />
            <Route path="/view" element={<ViewAttachments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
