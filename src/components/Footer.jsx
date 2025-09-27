import React from "react";
import Container from "./Container";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const Footer = () => {
  return (
    <footer className="bg-black py-11">
      <Container>
        <div className="px-6 lg:px-20">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-md font-bold text-white mb-2">
                CS — Ticket System
              </h3>
             <p className="text-sm text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Company</h4>
              <ul className="space-y-1 text-sm text-[#A1A1AA]">
                  <li>About Us</li>
       <li>Our Mission</li>
                <li>Contact Sales</li>
              </ul>
            </div>
        <div>
   <h4 className="font-semibold mb-2 text-white">Services</h4>
              <ul className="space-y-1 text-sm text-[#A1A1AA]">
                <li>Products & Services</li>
                  <li>Customer Stories</li>
                <li>Download Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Information</h4>
              <ul className="space-y-1 text-sm text-[#A1A1AA]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Join Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Social Links</h4>
              <ul className="space-y-1 text-sm text-white">
                   <li className="flex items-center mb-2">
                  <img src={logo1} alt="Twitter" className="w-5 h-5 mr-2" />
                  @CS — Ticket System
                </li>
                <li className="flex items-center mb-2">
                  <img src={logo2} alt="Instagram" className="w-5 h-5 mr-2" />
                    @CS — Ticket System
                </li>
                <li className="flex items-center mb-2">
                      <img src={logo3} alt="Fb" className="w-5 h-5 mr-2" />
                      @CS — Ticket System
                </li>
                <li className="flex items-center mb-2">
                  <img src={logo4} alt="Support" className="w-5 h-5 mr-2" />
                      @CS — Ticket System
                </li>
              </ul>
            </div>
          </div>
          <div className="text-left md:text-center text-gray-500 text-sm mt-8">
            © 2025 CS — Ticket System. All rights reserved.
            <br className="block md:hidden" /> All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
