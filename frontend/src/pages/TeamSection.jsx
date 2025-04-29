import React, { useState, useEffect } from "react";
import MobileTeamSection from "../components/MobileTeamSection";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
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
          <h1 className="text-4xl font-bold text-blue-400">Our Team</h1>
          <div className="w-[100px] h-1 border-b-4 border-red-400 mt-2"></div>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-4">
          {/* Team Member 1 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c905ea3bd77fb523b43b4f7b1e9a2ae471cd08f5?placeholderIfAbsent=true"
                alt="Deepanshu"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Deepanshu</h3>
            <p className="text-gray-600">Co-Founder</p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5d1d68935136ae50d7ce4adff7e2ca8a531ff6d?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b259acde55ec40da2f89d436069c3f2943123722?placeholderIfAbsent=true"
                alt="Ashish"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Ashish</h3>
            <p className="text-gray-600">Co-Founder</p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/228f8e77cdf7a3eedd015c7cb07b1612b2b04c6d?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./Akshay.png"
                alt="Akshay"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Akshay</h3>
            <p className="text-gray-600 text-center">
              Director, Applied Research - <br />
              Speech Recognition
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e90d157cc48d1cf07ce012315a2cf669ec77019?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./Dashmi.png"
                alt="Dashmi"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Dashmi</h3>
            <p className="text-gray-600 text-center">
              Speech-Language Pathologist & <br /> Learning Designer
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e90d157cc48d1cf07ce012315a2cf669ec77019?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fc17269f61c6cdce3cd362ddb20d09d092f2db?placeholderIfAbsent=true"
                alt="Poornima"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Poornima</h3>
            <p className="text-gray-600 text-center">
              Creative Consultant – Animation & Story
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e90d157cc48d1cf07ce012315a2cf669ec77019?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 4 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05811781c18ab199d326f984b85080d9e79c1c82?placeholderIfAbsent=true"
                alt="Deepak"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Deepak</h3>
            <p className="text-gray-600 text-center">Full-Stack Engineer</p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/594499291f3eb2a2528215bf5dc2ff50e910a12a?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 5 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/448b74b9b19dd7f36d078e2e0e081a5c0da194b6?placeholderIfAbsent=true"
                alt="Rithesh"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Rithesh</h3>
            <p className="text-gray-600 text-center">
              Applied Research Engineer - Speech Recognition
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5787d54997fd1dc9c6b09ab49568fc863ab3770d?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 6 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c723a830d412e57eaaa937816004d95891ff7fc?placeholderIfAbsent=true"
                alt="Ramani"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Ramani</h3>
            <p className="text-gray-600 text-center">UI/UX Designer</p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f94062d8da2a527c47e07cb12302b7cb40084d?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 6 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="./Hema.png"
                alt="Hema"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Hema</h3>
            <p className="text-gray-600 text-center">
              Learning Presenter & Playschool <br /> Teacher
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f94062d8da2a527c47e07cb12302b7cb40084d?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 7 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cb06b7fd04b7e9d2a217c22ebceb0fb46b30fd?placeholderIfAbsent=true"
                alt="Pranav"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Pranav</h3>
            <p className="text-gray-600 text-center">
              Applied Research Engineer - Speech Recognition
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b16125b45b6aeae76fb70f73f249a1dc0ef6460?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 7 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cb06b7fd04b7e9d2a217c22ebceb0fb46b30fd?placeholderIfAbsent=true"
                alt="Jack"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Jack</h3>
            <p className="text-gray-600 text-center">
              Applied Research Engineer - Speech Recognition
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b16125b45b6aeae76fb70f73f249a1dc0ef6460?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 8 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f4b206d-6296-46a2-b788-854a4fd97ed8?placeholderIfAbsent=true"
                alt="Hriday"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Hriday</h3>
            <p className="text-gray-600 text-center">
              Games & Applications Developer
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b91607672628a2f326946c907f9229624d5dd6b?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>

          {/* Team Member 9 */}
          <div
            className="flex flex-col items-center lg:col-start-2 lg:col-end-3"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="w-[200px] h-[220px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bfb834b0a625629c6901f938c3e0331837676b8?placeholderIfAbsent=true"
                alt="Atharva"
                className="w-[200px] max-h-[200px] object-contain rounded-md"
              />
            </div>

            <h3 className="text-xl font-bold mt-4">Atharva</h3>
            <p className="text-gray-600 text-center">
              Illustrator and 2D Animator
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea34032604b03b5c153e7970f29f7c8754cc68bd?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-2 shadow-md"
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full flex justify-center mt-20"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="w-[280px] h-1 border-b-2 border-zinc-300"></div>
        </div>

        {/* Support Circle Section */}
        <div
          className="flex flex-col items-center justify-center mt-20"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <h1 className="text-4xl font-bold text-blue-400">
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
            data-aos-delay="1200"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/892a4b659c64f3e54c44abc1f22cad58cf35bd20?placeholderIfAbsent=true"
                alt="Shouvik Das"
                className="w-[150px] max-h-[150px] object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Shouvik Das</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ca35ccd9d617d10b1cfcc49bca2dece0ab87988?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
          </div>

          {/* Support Member 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/883ec1d26419a91fd8b34bad47742d7f183536dc?placeholderIfAbsent=true"
                alt="Chanakya Hridaya"
                className="w-[150px] max-h-[150px] object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Chanakya Hridaya</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad380d228f6350cbaaf8d7d7850a861a74e2fde1?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
          </div>

          {/* Support Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/339e20a04a839fae488319c3c743cb1fca70fb91?placeholderIfAbsent=true"
                alt="Mrityunjay Kumar"
                className="w-[150px] max-h-[150px] object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Mrityunjay Kumar</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/628e6dc6d5213a4a5f4a0536dad37a0bd6e65cd8?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
          </div>

          {/* Support Member 4 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20eeb8fc9894c4200cc964c5debc868403782579?placeholderIfAbsent=true"
                alt="Harshit Madan"
                className="w-[150px] max-h-[150px] object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Harshit Madan</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31de86622288d574dc9eceb66ee101ebcd7bfe9?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
          </div>

          {/* Support Member 5 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e174e25f2ec07942b5383739fe1b9205f36401a9?placeholderIfAbsent=true"
                alt="Juhi Mishra"
                className="w-[150px] max-h-[150px] object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Juhi Mishra</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77676c75ee3031bc7757690ab81d04969636b730?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
          </div>

          {/* Support Member 6 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1700"
          >
            <div className="w-[150px] h-[170px] flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/808370092ffa2773ab3d6b34d81208afa79cc57b?placeholderIfAbsent=true"
                alt="Jitendra Kumar"
                className="w-[150px] max-h-[150px] object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Jitendra Kumar</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/483f0eb37c56281dee0f915eebaad1e890379fd4?placeholderIfAbsent=true"
              alt="Social Media"
              className="w-6 h-6 mt-3 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
