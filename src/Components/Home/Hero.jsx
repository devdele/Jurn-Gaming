import React from "react";
import Joystick from "../../assets/joystick.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center max-w-[1480px] mx-auto px-4 py-8 md:py-0 text-white bg-transparent">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 mt-8 md:mt-0">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Get A Better Gaming Experience.
          </h1>
        </div>
        <div>
          <p className="text-sm md:text-base lg:text-lg text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            excepturi non debitis sit odit deserunt. Mollitia corrupti, cumque
            aspernatur iure perspiciatis ducimus optio eaque quos est cupiditate
            aut voluptatem enim earum esse soluta distinctio repellat eligendi
            temporibus rerum ex laudantium tempora! In unde iusto eos voluptatem
            magni ipsum rerum quibusdam voluptas, reiciendis consectetur
            temporibus enim, iure a facere distinctio tempora.
          </p>
        </div>
        <div className="mt-4">
          <button
            className="relative overflow-hidden rounded-[25px] bg-[#FA9021] px-5 py-2.5 text-white transition-all duration-300 
            [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 
            active:scale-y-110 h-[53px] w-[200px] sm:w-[200px] hover:bg-[#e88419]"
          >
            Get more details
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={Joystick}
          alt="Gaming Joystick"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
