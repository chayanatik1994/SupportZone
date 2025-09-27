import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF]">
       <Container>
        <nav className="px-6 py-4 items-center lg:px-20 justify-between flex">
            <h1 className="text-black font-bold text-2xl">CS — Ticket System</h1>
        <div className="flex items-center gap-6">
            <ul className="text-sm text-black flex gap-3 ">
              <li>Home</li>
            <li>FAQ</li>
             <li>Changelog</li>
             <li>Blog</li>
              <li>Download</li>
              <li>Contact</li>
            </ul>
              <button className="bg-[#422Ad5] px-10 py-2 text-white gap-1 rounded-md text-sm">
              + New Ticket
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
