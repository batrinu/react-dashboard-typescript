import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import LoginPage from "./components/LoginPage";
import UnitsPage from "./components/UnitsPage";
import UnitDetail from "./components/UnitDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Use DashboardLayout */}
          <Route index element={<Dashboard />} /> {/* Default dashboard view */}
          <Route path="units" element={<UnitsPage />} />
          <Route path="unit/id" element={<UnitDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
