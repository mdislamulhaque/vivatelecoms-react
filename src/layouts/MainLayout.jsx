import React from "react";
import Header from "../components/header/Header";
import { Outlet, useLocation, useOutlet } from "react-router"; // 'react-router-dom' ব্যবহার
import Footer from "../components/footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();
const outlet = useOutlet();
 

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 overflow-hidden bg-gradient-to-l from-[#8c4a86]/50 via-cyan-100/50 to-[#0f4174]/50">
        <AnimatePresence mode="wait">
          {outlet && <div key={location.pathname}>{outlet}</div>}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
