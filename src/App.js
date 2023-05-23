import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cloth from "./pages/Cloth";
import Food from "./pages/Food";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Medical from "./pages/Medical";
import Stationery from "./pages/Stationery/Stationery";
import AddStationery from "./pages/Stationery/AddStationery";
import StationeryListView from "./components/admin/StationeryListView";
import NewStationery from "./pages/Stationery/NewStationery";
import ViewStationery from "./pages/Stationery/ViewStationery";
import UserList from "./pages/Admin/User/UserList";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import AdminStationery from "./components/adminstationery/AdminStationery";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/food" element={<Food />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/addStationery" element={<AddStationery />} />
          <Route path="/cc" element={<ViewStationery />} />
          <Route path="/adminstationery" element={<AdminStationery />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
