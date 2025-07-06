import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import { SiteFooter } from "./components/shared/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

export default App;
