import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import HomeIndex from "./pages/home-page/HomeIndex";
import ContactIndex from "./pages/contact-page/ContactIndex";
import LiveChat from "./global/LiveChat";

export const SmSizeContext = createContext();

export default function App() {
  const [smScreen, setSmScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setSmScreen(true);
    } else {
      setSmScreen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResizeForNav);
    return () => window.removeEventListener("resize", handleResizeForNav);
  });

  function handleResizeForNav() {
    if (window.innerWidth < 769) {
      setSmScreen(true);
    } else {
      setSmScreen(false);
    }
  }

  return (
    <>
      <Router>
        <SmSizeContext.Provider value={smScreen}>
          <Navbar></Navbar>

          <Switch>
            <Route path="/" exact>
              <HomeIndex></HomeIndex>
            </Route>
            <Route path="/contact">
              <ContactIndex></ContactIndex>
            </Route>
          </Switch>
          <Footer></Footer>
          <LiveChat></LiveChat>
        </SmSizeContext.Provider>
      </Router>
    </>
  );
}
