import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 overflow-hidden bg-gradient-to-l from-[#8c4a86]/50 via-cyan-100/50 to-[#0f4174]/50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
