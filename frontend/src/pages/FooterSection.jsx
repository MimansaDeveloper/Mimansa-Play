import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-[#C5DEF2] py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section - Logo */}
        <div className="mb-8 md:mb-0">
            
          <img src="/logo.png" alt="Mimansa Kids Logo" className="w-[12vw]" />
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col md:flex-row md:space-x-20 space-y-8 md:space-y-0">
          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-[16px] mb-4">SOCIAL</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fab fa-facebook mr-2"></i> Facebook
              </li>
              <li className="flex items-center">
                <i className="fab fa-instagram mr-2"></i> Instagram
              </li>
              <li className="flex items-center">
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-[16px] mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Testimonial</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-[16px] mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Right Section - App Store Links */}
        <div className="flex flex-col items-end">
          <h3 className="font-semibold text-[16px] mb-4">COMING SOON ON</h3>
          <div className="flex flex-col space-y-4">
            <img src="/appstore.png" alt="App Store" className="w-[150px]" />
            <img src="/googleplay.png" alt="Google Play" className="w-[150px]" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">© 2024 Mimansa Kids</p>
      </div>
    </footer>
  );
};

export default FooterSection;
