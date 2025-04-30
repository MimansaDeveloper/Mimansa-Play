import React, { useState, useEffect } from "react";
import MobileTeamSection from "../components/MobileTeamSection";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 300,
      once: true,
      easing: "ease-in-out",
    });

    // Function to check if viewport is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Render mobile view for mobile devices
  if (isMobile) {
    return <MobileTeamSection />;
  }

  // Desktop view
  return (
    <div className="w-full h-full bg-white py-10">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-blue-400 font-comic-neue">
            Our Team
          </h1>
          <div className="w-[100px] h-1 border-b-4 border-red-400 mt-2"></div>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-4">
          {/* Team Member 1 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Deepanshu.png"
                alt="Deepanshu"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">
              Deepanshu
            </h3>
            <p className="text-gray-600 font-comic-neue">Co-Founder</p>
            <a href="https://www.linkedin.com/in/deepanshu-pathak-ed/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Ashish.png"
                alt="Ashish"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Ashish</h3>
            <p className="text-gray-600 font-comic-neue">Co-Founder</p>
            <a href="https://www.linkedin.com/in/ashishnavalakha/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Akshay.png"
                alt="Akshay"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Akshay</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Director, Applied Research - <br />
              Speech Recognition
            </p>
            <a href="https://www.linkedin.com/in/akshaynagarajan/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>
          

          {/* Team Member 4 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Dashmi.png"
                alt="Dashami"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Dashami</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Speech-Language Pathologist & <br /> Learning Designer
            </p>
            <a href="https://www.linkedin.com/in/dashami-poonacha-4590b2152/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 5 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Poornima.png"
                alt="Poornima"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Poornima</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Creative Consultant – Animation <br /> & Story
            </p>
            <a href="https://www.linkedin.com/in/poornima-subramaniam/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 6 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Deepak.png"
                alt="Deepak"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Deepak</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Platform Engineer & <br /> Guitarist
            </p>
            <a href="https://www.linkedin.com/in/deepak-kumar-learner/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 7 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Ritesh.png"
                alt="Ritesh"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Ritesh</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Applied Research Engineer - <br />Speech Recognition
            </p>
            <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/ritesh-dwivedi-077a1522a/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 8 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Ramani.png"
                alt="Ramani"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Ramani</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              UI/UX Designer
            </p>
            <a href="https://www.linkedin.com/in/ramani-krishnan-7473b1184/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 9 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Hema.png"
                alt="Hema"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Hema</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Learning Presenter & Playschool <br /> Teacher
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 10 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Pranav.png"
                alt="Pranav"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Pranav</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Applied Research Engineer - <br />Speech Recognition
            </p>
            <a href="https://www.linkedin.com/in/pranav-singh-usa/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 7 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Zach.png"
                alt="Zach"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 font-comic-neue">Zach</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Applied Research Engineer - <br />Speech Recognition
            </p>
            <a href="https://www.linkedin.com/in/zach-weiner-a4ab13362" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 8 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Hriday.png"
                alt="Hriday"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Hriday</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Games & Applications <br />Developer
            </p>
            <a href="https://www.linkedin.com/in/hriday-bobbili-508194291/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>

          {/* Team Member 9 */}
          <div
            className="flex flex-col items-center lg:col-start-2 lg:col-end-3"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./team/Atharav.png"
                alt="Atharva"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 font-comic-neue">Atharva</h3>
            <p className="text-gray-600 text-center font-comic-neue">
              Illustrator and 2D Animator
            </p>
            <a href="https://www.linkedin.com/in/atharvasoni-koyo/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full flex justify-center mt-20"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="w-[280px] h-1 border-b-2 border-zinc-300"></div>
        </div>

        {/* Support Circle Section */}
        <div
          className="flex flex-col items-center justify-center mt-20"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <h1 className="text-4xl font-bold text-blue-400 font-comic-neue">
            Our Circle of Support
          </h1>
          <div className="w-[200px] h-1 border-b-4 border-red-400 mt-2"></div>
        </div>
        {/* Support Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-4">
          {/* Support Member 1 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="./team/Shouvik.png"
                alt="Shouvik Das"
                className="w-[150px] max-h-[150px] object-contain rounded-[68px_101px_101px_68px]"
              />
            </div>

            <h3 className="text-xl font-bold mt-6 font-comic-neue">
              Shouvik Das
            </h3>
            <a href="https://www.linkedin.com/in/das-shouvik/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
            </a>
          </div>

          {/* Support Member 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="./team/Chanakya.png"
                alt="Chanakya Hridaya"
                className="w-[150px] max-h-[150px] object-contain rounded-[41px] w-[114px]"
              />
            </div>

            <h3 className="text-xl font-bold mt-6 font-comic-neue">
              Chanakya Hridaya
            </h3>
            <a href="https://www.linkedin.com/in/chanakya-hridaya-44743425/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
            </a>
          </div>

          {/* Support Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="./team/Mrithunjay.png"
                alt="Mrityunjay Kumar"
                className="w-[150px] max-h-[150px] object-contain rounded-[41px_55px_27px_41px"
              />
            </div>

            <h3 className="text-xl font-bold mt-6 font-comic-neue">
              Mrityunjay Kumar
            </h3>
            <a href="https://www.linkedin.com/in/mrityunjaykumar/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
            </a>
          </div>

          {/* Support Member 4 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="950"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="./team/Harshi.png"
                alt="Harshit Madan"
                className="w-[150px] max-h-[150px] object-contain rounded-[101px_101px_55px_55px]"
              />
            </div>

            <h3 className="text-xl font-bold mt-6 font-comic-neue">
              Harshit Madan
            </h3>
            <a href="https://www.linkedin.com/in/harshit-madan-7ba7a615/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
            </a>
          </div>

          {/* Support Member 5 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="./team/Juhi.png"
                alt="Juhi Mishra"
                className="w-[150px] max-h-[150px] object-contain rounded-[55px_5px_23px_27px]"
              />
            </div>

            <h3 className="text-xl font-bold mt-6 font-comic-neue">
              Juhi Mishra
            </h3>
            <a href="https://www.linkedin.com/in/juhiamishra/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
            </a>
          </div>

          {/* Support Member 6 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1050"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="./team/Jitendra.png"
                alt="Jitendra Kumar"
                className="w-[150px] max-h-[150px] object-contain rounded-[55px_27px_9px_41px]"
              />
            </div>

            <h3 className="text-xl font-bold mt-6 font-comic-neue">
              Jitendra Kumar
            </h3>
            <a href="https://www.linkedin.com/in/jitendra-kumar-1b926014/" target="_blank" rel="noopener noreferrer">
            <img
              src="./linked.png"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
