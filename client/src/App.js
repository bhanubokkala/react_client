import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AllRoutes from "./Components/AllRoutes";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  const [ setVidUploadPage] = useState(false);
  const [setEditCreateChanelBtn] = useState(false);
  return (
    <Router>
      <Navbar
        setEditCreateChanelBtn={setEditCreateChanelBtn}
        toggleDrawer={toggleDrawer}
      />

      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />

      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} />
    </Router>
  );
}

export default App;