import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MobileTeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="flex overflow-hidden flex-col items-center px-9 pt-11 pb-24 mx-auto w-full bg-white max-w-[480px]">
      <div className="text-2xl font-bold text-blue-400" data-aos="fade-up">
        Our Team
      </div>
      <div
        className="shrink-0 mt-1.5 h-0.5 border-2 border-red-400 border-solid w-[100px]"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <div className="flex gap-5 justify-between self-stretch mt-14 whitespace-nowrap">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c905ea3bd77fb523b43b4f7b1e9a2ae471cd08f5?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-none aspect-[0.89]"
            alt="Deepanshu"
          />
          <div className="mt-4 text-base font-bold text-black">Deepanshu</div>
          <div className="text-xs font-medium text-stone-600">Co-Founder</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5d1d68935136ae50d7ce4adff7e2ca8a531ff6d?placeholderIfAbsent=true"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b259acde55ec40da2f89d436069c3f2943123722?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-md aspect-[0.89]"
            alt="Ashish"
          />
          <div className="mt-4 text-base font-bold text-black">Ashish</div>
          <div className="text-xs font-medium text-stone-600">Co-Founder</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/228f8e77cdf7a3eedd015c7cb07b1612b2b04c6d?placeholderIfAbsent=true"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fc17269f61c6cdce3cd362ddb20d09d092f2db?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-none aspect-[0.88]"
            alt="Poornima"
          />
          <div className="mt-3 text-base font-bold text-black">Poornima</div>
          <div className="text-xs font-medium text-center text-stone-600">
            Creative Consultant – Animation & Story
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e90d157cc48d1cf07ce012315a2cf669ec77019?placeholderIfAbsent=true"
            className="object-contain mt-2 aspect-[0.96] shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col items-center my-auto max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05811781c18ab199d326f984b85080d9e79c1c82?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-none aspect-[0.91]"
            alt="Deepak"
          />
          <div className="mt-4 text-base font-bold text-black">Deepak</div>
          <div className="text-xs font-medium text-center text-stone-600">
            Full-Stack Engineer
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/594499291f3eb2a2528215bf5dc2ff50e910a12a?placeholderIfAbsent=true"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/448b74b9b19dd7f36d078e2e0e081a5c0da194b6?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-md aspect-[0.92]"
            alt="Rithesh"
          />
          <div className="mt-3 text-base font-bold text-black">Rithesh</div>
          <div className="text-xs font-medium text-center text-stone-600">
            Applied Research Engineer - Speech Recognition
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5787d54997fd1dc9c6b09ab49568fc863ab3770d?placeholderIfAbsent=true"
            className="object-contain mt-2 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c723a830d412e57eaaa937816004d95891ff7fc?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-none aspect-[0.92]"
            alt="Ramani"
          />
          <div className="mt-4 text-base font-bold text-black">Ramani</div>
          <div className="text-xs font-medium text-center text-stone-600">
            UI/UX Designer
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f94062d8da2a527c47e07cb12302b7cb40084d?placeholderIfAbsent=true"
            className="object-contain mt-2.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
      <div className="flex gap-10 self-start mt-10 ml-3.5">
        <div
          className="flex flex-col items-center self-end mt-40"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="text-base font-bold text-black">Zack</div>
          <div className="self-stretch text-xs font-medium text-center text-stone-600">
            Applied Research Engineer - Speech Recognition
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c4650e7166eb427487a04176dc014c2df72d3a?placeholderIfAbsent=true"
            className="object-contain mt-2 w-6 aspect-[1.04] shadow-[1px_1px_3px_rgba(23,27,33,0.5)]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cb06b7fd04b7e9d2a217c22ebceb0fb46b30fd?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-md aspect-[0.92]"
            alt="Pranav"
          />
          <div className="mt-3 text-base font-bold text-black">Pranav</div>
          <div className="text-xs font-medium text-center text-stone-600">
            Applied Research Engineer - Speech Recognition
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b16125b45b6aeae76fb70f73f249a1dc0ef6460?placeholderIfAbsent=true"
            className="object-contain mt-2 w-6 aspect-[1.04] shadow-[1px_1px_3px_rgba(23,27,33,0.5)]"
            alt="Social icon"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-10">
        <div
          className="flex flex-col items-center max-w-full w-[131px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f4b206d-6296-46a2-b788-854a4fd97ed8?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full aspect-[0.92]"
            alt="Hriday"
          />
          <div className="mt-2 text-base font-bold text-black">Hriday</div>
          <div className="text-xs font-medium text-center text-stone-600">
            Games & Applications Developer
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b91607672628a2f326946c907f9229624d5dd6b?placeholderIfAbsent=true"
            className="object-contain mt-2 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col items-center self-start max-w-full w-[131px]"
          data-aos="fade-left"
          data-aos-delay="1100"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bfb834b0a625629c6901f938c3e0331837676b8?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full rounded-md aspect-[0.95]"
            alt="Atharva"
          />
          <div className="mt-4 text-base font-bold text-black">Atharva</div>
          <div className="text-xs font-medium text-center text-stone-600">
            Illustrator and 2D Animator
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea34032604b03b5c153e7970f29f7c8754cc68bd?placeholderIfAbsent=true"
            className="object-contain mt-2.5 aspect-[0.96] shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
      <div
        className="shrink-0 mt-16 max-w-full h-0.5 border-2 border-solid border-zinc-300 w-[280px]"
        data-aos="fade-up"
        data-aos-delay="1200"
      />
      <div
        className="mt-20 text-2xl font-bold text-blue-400"
        data-aos="fade-up"
        data-aos-delay="1300"
      >
        Our Circle of Support
      </div>
      <div
        className="shrink-0 mt-1.5 h-0.5 border-2 border-red-400 border-solid w-[200px]"
        data-aos="fade-up"
        data-aos-delay="1400"
      />
      <div className="flex gap-10 mt-16 text-base font-bold text-black">
        <div
          className="flex flex-col items-center max-w-full w-[114px]"
          data-aos="fade-right"
          data-aos-delay="1500"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/892a4b659c64f3e54c44abc1f22cad58cf35bd20?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full aspect-square rounded-[68px_101px_101px_68px]"
            alt="Shouvik Das"
          />
          <div className="mt-6">Shouvik Das</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ca35ccd9d617d10b1cfcc49bca2dece0ab87988?placeholderIfAbsent=true"
            className="object-contain mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col"
          data-aos="fade-left"
          data-aos-delay="1600"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/883ec1d26419a91fd8b34bad47742d7f183536dc?placeholderIfAbsent=true"
            className="object-contain aspect-square rounded-[41px] w-[114px]"
            alt="Chanakya Hridaya"
          />
          <div className="mt-6">Chanakya Hridaya</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad380d228f6350cbaaf8d7d7850a861a74e2fde1?placeholderIfAbsent=true"
            className="object-contain self-center mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
      <div className="flex gap-10 mt-16 text-base font-bold text-black">
        <div
          className="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="1700"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/339e20a04a839fae488319c3c743cb1fca70fb91?placeholderIfAbsent=true"
            className="object-contain aspect-square rounded-[41px_55px_27px_41px] w-[114px]"
            alt="Mrityunjay Kumar"
          />
          <div className="mt-6">Mrityunjay Kumar</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/628e6dc6d5213a4a5f4a0536dad37a0bd6e65cd8?placeholderIfAbsent=true"
            className="object-contain self-center mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col"
          data-aos="fade-left"
          data-aos-delay="1800"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20eeb8fc9894c4200cc964c5debc868403782579?placeholderIfAbsent=true"
            className="object-contain aspect-square rounded-[101px_101px_55px_55px] w-[114px]"
            alt="Harshit Madan"
          />
          <div className="mx-2.5 mt-6">Harshit Madan</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31de86622288d574dc9eceb66ee101ebcd7bfe9?placeholderIfAbsent=true"
            className="object-contain self-center mt-3 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
      <div className="flex gap-10 mt-16 text-base font-bold text-black">
        <div
          className="flex flex-col items-center max-w-full w-[114px]"
          data-aos="fade-right"
          data-aos-delay="1900"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e174e25f2ec07942b5383739fe1b9205f36401a9?placeholderIfAbsent=true"
            className="object-contain self-stretch w-full aspect-square rounded-[55px_5px_23px_27px]"
            alt="Juhi Mishra"
          />
          <div className="mt-6">Juhi Mishra</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77676c75ee3031bc7757690ab81d04969636b730?placeholderIfAbsent=true"
            className="object-contain mt-3.5 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
        <div
          className="flex flex-col"
          data-aos="fade-left"
          data-aos-delay="2000"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/808370092ffa2773ab3d6b34d81208afa79cc57b?placeholderIfAbsent=true"
            className="object-contain aspect-square rounded-[55px_27px_9px_41px] w-[114px]"
            alt="Jitendra Kumar"
          />
          <div className="mt-6">Jitendra Kumar</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/483f0eb37c56281dee0f915eebaad1e890379fd4?placeholderIfAbsent=true"
            className="object-contain self-center mt-3 aspect-square shadow-[1px_1px_3px_rgba(23,27,33,0.5)] w-[23px]"
            alt="Social icon"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileTeamSection;
