import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className="min-h-[50vh] p-4">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Layout;
