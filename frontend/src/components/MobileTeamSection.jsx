import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MobileTeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="flex overflow-hidden flex-col items-center px-9 pt-11 pb-24 mx-auto w-full bg-white max-w-[480px]">
      <div
        className="text-2xl font-bold text-blue-400 font-comic-neue"
        data-aos="fade-up"
      >
        Our Team
      </div>
      <div
        className="shrink-0 mt-1.5 h-0.5 border-2 border-red-400 border-solid w-[100px]"
        data-aos="fade-up"
        data-aos-delay="50"
      />
      <div className="flex gap-5 justify-between self-stretch mt-14 whitespace-nowrap">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src="./team/Deepanshu.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.89]"
            alt="Deepanshu"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Deepanshu
          </div>
          <div className="text-xs font-medium text-stone-600 font-comic-neue">
            Co-Founder
          </div>
          <a href="https://www.linkedin.com/in/deepanshu-pathak-ed/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <img
            src="./team/Ashish.png"
            className="object-contain self-stretch w-full rounded-md aspect-[0.89]"
            alt="Ashish"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Ashish
          </div>
          <div className="text-xs font-medium text-stone-600 font-comic-neue">
            Co-Founder
          </div>
          <a href="https://www.linkedin.com/in/ashishnavalakha/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src="./team/Akshay.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.88]"
            alt="Akshay"
          />
          <div className="mt-3 text-base font-bold text-black font-comic-neue ">
            Akshay
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue w-[180px]">
          Director, Applied Research - Speech Recognition
          </div>
          <a href="https://www.linkedin.com/in/akshaynagarajan/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2 aspect-[0.96] shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>


        <div
          className="flex flex-col items-center my-auto max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <img
            src="./team/Dashmi.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.91]"
            alt="Dashmi"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Dashami
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue w-[180px]">
          Speech-Language Pathologist & Learning Designer
          </div>
          <a href="https://www.linkedin.com/in/dashami-poonacha-4590b2152/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>

      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img
            src="./team/Poornima.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.88]"
            alt="Poornima"
          />
          <div className="mt-3 text-base font-bold text-black font-comic-neue">
            Poornima
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue">
            Creative Consultant – Animation & Story
          </div>
          <a href="https://www.linkedin.com/in/poornima-subramaniam/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2 aspect-[0.96] shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>

        
        <div
          className="flex flex-col items-center my-auto max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="350"
        >
          <img
            src="./team/Deepak.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.91]"
            alt="Deepak"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Deepak
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue">
            Platform Engineer & Guitarist
          </div>
          <a href="https://www.linkedin.com/in/deepak-kumar-learner/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img
            src="./team/Ritesh.png"
            className="object-contain self-stretch w-full rounded-md aspect-[0.92]"
            alt="Ritesh"
          />
          <div className="mt-3 text-base font-bold text-black font-comic-neue">
            Ritesh
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue w-[180px]">
            Applied Research Engineer - Speech Recognition
          </div>
          <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/ritesh-dwivedi-077a1522a/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <img
            src="./team/Ramani.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.92]"
            alt="Ramani"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Ramani
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue">
            UI/UX Designer
          </div>
          <a href="https://www.linkedin.com/in/ramani-krishnan-7473b1184/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>

      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img
            src="./team/Pranav.png"
            className="object-contain self-stretch w-full rounded-md aspect-[0.92]"
            alt="Pranav"
          />
          <div className="mt-3 text-base font-bold text-black font-comic-neue">
            Pranav
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue w-[180px]">
            Applied Research Engineer - Speech Recognition
          </div>
          <a href="https://www.linkedin.com/in/pranav-singh-usa/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="550"
        >
          <img
            src="./team/Zach.png"
            className="object-contain self-stretch w-full rounded-none aspect-[0.92]"
            alt="Jack"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Zach
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue w-[180px]">
          Applied Research Engineer - Speech Recognition
          </div>
          <a href="https://www.linkedin.com/in/zach-weiner-a4ab13362" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>

      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <img
            src="./team/Hriday.png"
            className="object-contain self-stretch w-full aspect-[0.92]"
            alt="Hriday"
          />
          <div className="mt-2 text-base font-bold text-black font-comic-neue">
            Hriday
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue">
            Games & Applications Developer
          </div>
          <a href="https://www.linkedin.com/in/hriday-bobbili-508194291/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center self-start max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="650"
        >
          <img
            src="./team/Atharav.png"
            className="object-contain self-stretch w-full rounded-md aspect-[0.95]"
            alt="Atharva"
          />
          <div className="mt-4 text-base font-bold text-black font-comic-neue">
            Atharva
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue">
            Illustrator and 2D Animator
          </div>
          <a href="https://www.linkedin.com/in/atharvasoni-koyo/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2.5 aspect-[0.96] shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>

      <div className="flex gap-5 justify-center self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img
            src="./team/Hema.png"
            className="object-contain self-stretch w-full aspect-[0.92]"
            alt="Hema"
          />
          <div className="mt-2 text-base font-bold text-black font-comic-neue">
            Hema
          </div>
          <div className="text-xs font-medium text-center text-stone-600 font-comic-neue">
          Learning Presenter & Playschool Teacher
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-2 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>


      <div
        className="shrink-0 mt-16 max-w-full h-0.5 border-2 border-solid border-zinc-300 w-[280px]"
        data-aos="fade-up"
        data-aos-delay="750"
      />
      <div
        className="mt-20 text-2xl font-bold text-blue-400 font-comic-neue"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Our Circle of Support
      </div>
      <div
        className="shrink-0 mt-1.5 h-0.5 border-2 border-red-400 border-solid w-[200px]"
        data-aos="fade-up"
        data-aos-delay="850"
      />
      <div className="flex gap-10 mt-16 text-base font-bold text-black">
        <div
          className="flex flex-col items-center max-w-full w-[114px]"
          data-aos="fade-right"
          data-aos-delay="900"
        >
          <img
            src="./team/Shouvik.png"
            className="object-contain self-stretch w-full aspect-square rounded-[68px_101px_101px_68px]"
            alt="Shouvik Das"
          />
          <div className="mt-6 font-comic-neue">Shouvik Das</div>
          <a href="https://www.linkedin.com/in/das-shouvik/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[150px]"
          data-aos="fade-left"
          data-aos-delay="950"
        >
          <img
            src="./team/Chanakya.png"
            className="object-contain aspect-square rounded-[41px] w-[114px]"
            alt="Chanakya Hridaya"
          />
          <div className="mt-6 font-comic-neue">Chanakya Hridaya</div>
          <a href="https://www.linkedin.com/in/chanakya-hridaya-44743425/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>
      <div className="flex gap-10 mt-16 text-base font-bold text-black">
        <div
          className="flex flex-col items-center max-w-full w-[150px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <img
            src="./team/Mrithunjay.png"
            className="object-contain aspect-square rounded-[41px_55px_27px_41px] w-[114px]"
            alt="Mrityunjay Kumar"
          />
          <div className="mt-6 font-comic-neue">Mrityunjay Kumar</div>
          <a href="https://www.linkedin.com/in/mrityunjaykumar/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain self-center mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[150px]"
          data-aos="fade-left"
          data-aos-delay="1050"
        >
          <img
            src="./team/Harshi.png"
            className="object-contain aspect-square rounded-[101px_101px_55px_55px] w-[114px]"
            alt="Harshit Madan"
          />
          <div className="mx-2.5 mt-6 font-comic-neue">Harshit Madan</div>
          <a href="https://www.linkedin.com/in/harshit-madan-7ba7a615/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain self-center mt-3 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>
      <div className="flex gap-10 mt-16 text-base font-bold text-black">
        <div
          className="flex flex-col items-center max-w-full w-[114px]"
          data-aos="fade-right"
          data-aos-delay="1100"
        >
          <img
            src="./team/Juhi.png"
            className="object-contain self-stretch w-full aspect-square rounded-[55px_5px_23px_27px]"
            alt="Juhi Mishra"
          />
          <div className="mt-6 font-comic-neue">Juhi Mishra</div>
          <a href="https://www.linkedin.com/in/juhiamishra/" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[150px]"
          data-aos="fade-left"
          data-aos-delay="1150"
        >
          <img
            src="./team/Jitendra.png"
            className="object-contain aspect-square rounded-[55px_27px_9px_41px] w-[114px]"
            alt="Jitendra Kumar"
          />
          <div className="mt-6 font-comic-neue">Jitendra Kumar</div>
          <a href="https://www.google.com/search?q=jitendra+kumar&oq=jitendra+kumar&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyDQgBEC4Y1AIYsQMYgAQyDQgCEC4Y1AIYsQMYgAQyDQgDEC4Y1AIYsQMYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgzMzg3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
          <img
            src="./linked.png"
            className="object-contain mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileTeamSection;
