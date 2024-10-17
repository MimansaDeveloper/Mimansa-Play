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
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6658 4.2201L10.5309 4.22146C8.85676 4.22146 8.53214 4.98401 8.53214 6.1027V8.57114H12.5254L12.0052 12.4383H8.53214V22.3583H4.36875V12.4383H0.887207V8.57114H4.36875V5.72074C4.36875 2.4109 6.47667 0.609863 9.55421 0.609863C11.0285 0.609863 12.2958 0.714528 12.6658 0.762102V4.2201Z" fill="#454545" />
                </svg>
                Facebook
              </li>
              <li className="flex items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M15.6803 0.779785H6.24247C3.03744 0.779785 0.429932 3.3688 0.429932 6.55095V15.9214C0.429932 19.1037 3.03744 21.6925 6.24247 21.6925H15.6803C18.8855 21.6925 21.493 19.1035 21.493 15.9214V6.55095C21.4932 3.3688 18.8855 0.779785 15.6803 0.779785ZM19.6243 15.9214C19.6243 18.0805 17.8551 19.8371 15.6804 19.8371H6.24247C4.0679 19.8372 2.29875 18.0805 2.29875 15.9214V6.55095C2.29875 4.39191 4.0679 2.63527 6.24247 2.63527H15.6803C17.8549 2.63527 19.6242 4.39191 19.6242 6.55095L19.6243 15.9214Z" fill="#454545" />
                  <path d="M10.9614 5.84766C7.96864 5.84766 5.53394 8.26498 5.53394 11.2363C5.53394 14.2076 7.96864 16.6248 10.9614 16.6248C13.9541 16.6248 16.3888 14.2076 16.3888 11.2363C16.3888 8.26498 13.9541 5.84766 10.9614 5.84766ZM10.9614 14.7692C8.99923 14.7692 7.40276 13.1844 7.40276 11.2362C7.40276 9.28797 8.9991 7.70301 10.9614 7.70301C12.9236 7.70301 14.52 9.28797 14.52 11.2362C14.52 13.1844 12.9235 14.7692 10.9614 14.7692Z" fill="#454545" />
                  <path d="M16.6166 4.27441C16.2565 4.27441 15.9028 4.41914 15.6485 4.67272C15.393 4.92507 15.2461 5.27637 15.2461 5.6351C15.2461 5.99271 15.3931 6.34389 15.6485 6.59748C15.9027 6.84982 16.2565 6.99579 16.6166 6.99579C16.9779 6.99579 17.3305 6.84982 17.5859 6.59748C17.8413 6.34389 17.987 5.99259 17.987 5.6351C17.987 5.27637 17.8413 4.92507 17.5859 4.67272C17.3317 4.41914 16.9779 4.27441 16.6166 4.27441Z" fill="#454545" />
                </svg>
                Instagram
              </li>
              <li className="flex items-center">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M14.8149 6.13965C16.4062 6.13965 17.9324 6.77179 19.0576 7.89701C20.1828 9.02223 20.8149 10.5483 20.8149 12.1396V19.1396H16.8149V12.1396C16.8149 11.6092 16.6042 11.1005 16.2292 10.7254C15.8541 10.3504 15.3454 10.1396 14.8149 10.1396C14.2845 10.1396 13.7758 10.3504 13.4007 10.7254C13.0257 11.1005 12.8149 11.6092 12.8149 12.1396V19.1396H8.81494V12.1396C8.81494 10.5483 9.44708 9.02223 10.5723 7.89701C11.6975 6.77179 13.2236 6.13965 14.8149 6.13965Z" fill="#454545" />
                  <path d="M4.81494 7.13965H0.814941V19.1396H4.81494V7.13965Z" fill="#454545" />
                  <path d="M2.81494 4.13965C3.91951 4.13965 4.81494 3.24422 4.81494 2.13965C4.81494 1.03508 3.91951 0.139648 2.81494 0.139648C1.71037 0.139648 0.814941 1.03508 0.814941 2.13965C0.814941 3.24422 1.71037 4.13965 2.81494 4.13965Z" fill="#454545" />
                </svg>
                LinkedIn
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
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-[16px] text-center mb-4">COMING SOON ON</h3>
          <div className="flex flex-col space-y-4">
            <img src="/appstore.png" alt="App Store" className="w-[250px]" />
            <img src="/googleplay.png" alt="Google Play" className="w-[250px]" />
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
