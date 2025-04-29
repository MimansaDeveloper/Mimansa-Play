import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-32 bg-white rounded-[90px] max-md:px-5 max-md:pb-24"
      id="team-section"
    >
      <div className="flex flex-col items-center w-full max-w-[1200px] max-md:max-w-full">
        <div className="text-4xl font-bold text-blue-400" data-aos="fade-up">
          Our Team
        </div>
        <div
          className="shrink-0 mt-4 h-1 border-4 border-red-400 border-solid w-[200px]"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        {/* First Row */}
        <div
          className="mt-11 w-full max-w-[1055px] max-md:mt-10 max-md:max-w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center whitespace-nowrap max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb224fdec2ffede346e23d840daab11c5bece8b?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] aspect-[0.89]"
                />
                <div className="mt-9 text-3xl font-bold text-black">
                  Deepanshu
                </div>
                <div className="mt-1 text-base font-medium text-stone-600">
                  Co-Founder
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2479faf102e8dc2067e55eab6054758bb7833d0e?placeholderIfAbsent=true"
                  className="object-contain mt-5 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center whitespace-nowrap max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6272a7547eaf5264da65ed29bd4129d5e84837ad?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] rounded-xl aspect-[0.89]"
                />
                <div className="mt-9 text-3xl font-bold text-black">Ashish</div>
                <div className="mt-1 text-base font-medium text-stone-600">
                  Co-Founder
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7c23a04172c47a57f50a0c103d73bcbef7014e1?placeholderIfAbsent=true"
                  className="object-contain mt-5 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74199cbd19273afdaa235a030507202f9b4fb56a?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] rounded-xl aspect-[0.9]"
                />
                <div className="mt-9 text-3xl font-bold text-black">Akshay</div>
                <div className="mt-1 text-base font-medium text-center text-stone-600">
                  Director, Applied Research - Speech Recognition
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/76db0b317cc66966899cc828170c3fd359753085?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div
          className="mt-28 w-full max-w-[1055px] max-md:mt-10 max-md:max-w-full"
          data-aos="fade-up"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71fbd5d762098809bf74870e4bc75bae26f432c9?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] rounded-xl aspect-[0.89]"
                />
                <div className="mt-9 text-3xl font-bold text-black">
                  Dashami
                </div>
                <div className="mt-1 text-base font-medium text-center text-stone-600">
                  Speech-Language Pathologist & Learning Designer
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbdf42525cad50850e8f0e77f18cefd419a52b9?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebdb582eee57d9cf679a6a047b1add83a112a3a4?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] aspect-[0.89]"
                />
                <div className="mt-9 text-3xl font-bold text-black">
                  Poornima
                </div>
                <div className="mt-1 text-base font-medium text-center text-stone-600">
                  Creative Consultant – Animation & Story
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4b05a618fb0de38a3e9ecb60293d8b532d5724?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch my-auto max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d3b97e881404efa3d177dc25edc8d6ff99b2da0?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] aspect-[0.91]"
                />
                <div className="mt-9 text-3xl font-bold text-black">Deepak</div>
                <div className="mt-1 text-base font-medium text-center text-stone-600">
                  Full-Stack Engineer
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b4143b028c91440ff02491ca73c8b326a679f?placeholderIfAbsent=true"
                  className="object-contain mt-5 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div
          className="mt-32 w-full max-w-[1055px] max-md:mt-10 max-md:max-w-full"
          data-aos="fade-up"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d3eb4696e87f63f72093cc4b2b0f90c62640e65?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] rounded-xl aspect-[0.92]"
                />
                <div className="mt-9 text-3xl font-bold text-black">
                  Rithesh
                </div>
                <div className="mt-1 text-base font-medium text-center text-stone-600 w-[278px]">
                  Applied Research Engineer - Speech Recognition
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9036d5c7e7158e4c3b129c1713f3495cd88c650b?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e4329e56d9a02a21a19eb7f66eb1a03eabd96d?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] aspect-[0.92]"
                />
                <div className="mt-9 text-3xl font-bold text-black">Ramani</div>
                <div className="mt-1 text-base font-medium text-center text-stone-600">
                  UI/UX Designer
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d883e5eab2f8eaa530e15499b1512e4e93f523dc?placeholderIfAbsent=true"
                  className="object-contain mt-5 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a862b950567e612a817f4a727c401c8b9ecbe38?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] aspect-[0.92]"
                />
                <div className="mt-9 text-3xl font-bold text-black">
                  Sai Hema
                </div>
                <div className="mt-1 text-base font-medium text-center text-stone-600">
                  Learning Presenter & Playschool Teacher
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/67598b0b03a6f1a1627ba609cc0d80ac3f68a564?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div
          className="mt-32 w-full max-w-[1054px] max-md:mt-10 max-md:max-w-full"
          data-aos="fade-up"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center mt-14 max-md:mt-10">
                <div className="flex shrink-0 self-stretch rounded-xl bg-zinc-300 h-[252px] w-[80%]" />
                <div className="mt-9 text-3xl font-bold text-black">Zack</div>
                <div className="mt-1 text-base font-medium text-center text-stone-600 w-[278px]">
                  Applied Research Engineer - Speech Recognition
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19d53a15f8356d27d61b184d5762941548a51ba?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d20da95f4964bb7142bb4c11309ae2f1a8dbb478?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] rounded-xl aspect-[0.92]"
                />
                <div className="mt-9 text-3xl font-bold text-black">Pranav</div>
                <div className="mt-1 text-base font-medium text-center text-stone-600 w-[278px]">
                  Applied Research Engineer - Speech Recognition
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc17139743811b45ece03bef90c34891263631?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center mt-1.5 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3d5c9f9-0919-4c8c-9a7d-844bb963ed1b?placeholderIfAbsent=true"
                  className="object-contain self-stretch w-[80%] aspect-[0.93]"
                />
                <div className="mt-9 text-3xl font-bold text-black">Hriday</div>
                <div className="mt-1 text-base font-medium text-center text-stone-600 w-[253px]">
                  Games & Applications Developer
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/89cee26b711d49b50950b08f6b666a026f8a2e9c?placeholderIfAbsent=true"
                  className="object-contain mt-4 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Atharva - Single */}
        <div className="flex flex-col items-center" data-aos="fade-up">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/109c5a8e0f28d090e4bc4ea1fd7cbe0badca2b58?placeholderIfAbsent=true"
            className="object-contain mt-32 max-w-full rounded-xl aspect-[0.95] w-[220px] max-md:mt-10"
          />
          <div className="mt-9 text-3xl font-bold text-black">Atharva</div>
          <div className="mt-1 text-base font-medium text-center text-stone-600">
            Illustrator and 2D Animator
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ac2fe024ed8236944d42c71e158d715591c7084?placeholderIfAbsent=true"
            className="object-contain mt-5 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
          />
        </div>

        {/* Divider */}
        <div className="shrink-0 self-stretch mt-36 h-0.5 border-2 border-solid border-zinc-300 max-md:mt-10 max-md:max-w-full" />

        {/* Our Circle of Support Section */}
        <div
          className="mt-36 text-4xl font-bold text-blue-400 max-md:mt-10"
          data-aos="fade-up"
        >
          Our Circle of Support
        </div>
        <div
          className="shrink-0 mt-7 h-1 border-4 border-red-400 border-solid w-[200px]"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        {/* Support Team - First Row */}
        <div
          className="flex flex-col self-stretch px-20 mt-40 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <div className="flex overflow-hidden flex-col items-center self-stretch px-4 pt-8 bg-orange-200 aspect-square rounded-[150px_221px_221px_150px] w-[80%]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab42e5adf31bd160697cd4c6967d7120125ee9d?placeholderIfAbsent=true"
                    className="object-contain w-full aspect-[1.02]"
                  />
                </div>
                <div className="mt-9 text-3xl font-bold text-black max-md:mt-10 text-center">
                  Shouvik Das
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d760a1a863e76c0887b40966ba22615418834eab?placeholderIfAbsent=true"
                  className="object-contain mt-7 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <div className="flex overflow-hidden flex-col items-center bg-teal-200 aspect-square rounded-[90px] w-[80%] mx-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6c46b1c87e69b7554b68d580bc0569c0d2114c?placeholderIfAbsent=true"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <div className="mt-9 text-3xl font-bold text-black max-md:mt-10 text-center">
                  Chanakya Hridaya
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d27b3ffde0b57b3228463bf458b3ef100488d924?placeholderIfAbsent=true"
                  className="object-contain self-center mt-7 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center max-md:mt-10">
                <div className="flex overflow-hidden flex-col items-center bg-sky-300 aspect-square rounded-[90px_120px_60px_90px] w-[80%] mx-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1611e51e7bbf7adb19ce5b9e2d84457f6d7b50fe?placeholderIfAbsent=true"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <div className="mt-9 text-3xl font-bold text-black max-md:mt-10 text-center">
                  Mrityunjay Kumar
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba547d18b43beb636928002e2da072327684bd65?placeholderIfAbsent=true"
                  className="object-contain self-center mt-7 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
          </div>

          {/* Support Team - Second Row */}
          <div className="flex gap-5 mt-32 max-md:flex-col max-md:mt-10">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center max-md:mt-10">
                <div className="flex overflow-hidden flex-col items-center px-3.5 pt-7 aspect-square bg-slate-400 rounded-[221px_221px_120px_120px] w-[200px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9696dc891004ffcec6a4883ca00168e8129bf8d7?placeholderIfAbsent=true"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <div className="mt-9 text-3xl font-bold text-black max-md:mt-10 text-center">
                  Harshit Madan
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b09af4e444ce9aacba8c727d28d26d504dddb98d?placeholderIfAbsent=true"
                  className="object-contain mt-7 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center max-md:mt-10">
                <div className="flex overflow-hidden flex-col items-center px-3.5 pt-7 aspect-square bg-pink-200 rounded-[221px_221px_120px_120px] w-[200px]">
                  <img
                    src="URL_202"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <div className="mt-9 text-3xl font-bold text-black max-md:mt-10 text-center">
                  Juhi Mishra
                </div>
                <img
                  src="URL_203"
                  className="object-contain mt-7 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center max-md:mt-10">
                <div className="flex overflow-hidden flex-col items-center px-3.5 pt-7 aspect-square bg-purple-200 rounded-[221px_221px_120px_120px] w-[200px]">
                  <img
                    src="URL_204"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <div className="mt-9 text-3xl font-bold text-black max-md:mt-10 text-center">
                  Jitendar Kumar
                </div>
                <img
                  src="URL_205"
                  className="object-contain mt-7 aspect-square shadow-[2px_3px_7px_rgba(23,27,33,0.5)] w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
