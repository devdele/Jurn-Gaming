import React from "react";
import { BsPhone, BsPcDisplay, BsHeadsetVr, BsNintendoSwitch } from "react-icons/bs";
import { FaPlaystation, FaArrowRight, FaXbox } from "react-icons/fa6";
import { GrVirtualMachine } from "react-icons/gr";
import { TbCube3dSphere } from "react-icons/tb";

const Industry = () => {
  const services = [
    { icon: BsPhone, title: "mobile game development" },
    { icon: BsPcDisplay, title: "pc game development" },
    { icon: FaPlaystation, title: "P.S game development" },
    { icon: BsHeadsetVr, title: "Ar/Vr Solutions" },
    { icon: FaXbox, title: "Xbox game development" },
    { icon: BsNintendoSwitch, title: "Nintendo development" },
    { icon: GrVirtualMachine, title: "Ar/Vr Designs" },
    { icon: TbCube3dSphere, title: "3D Modelling" }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/fog-mountain-tropical-forest-thailand_33755-5079.jpg?uid=R77708393&ga=GA1.1.31871439.1720975573&semt=ais_hybrid')",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black bg-opacity-80 w-full p-4 md:p-8 gap-8 md:gap-11">
        {/* Heading Section */}
        <div className="text-center w-full max-w-[900px] px-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisIllum, repudiandae
            Lorem ipsum dolor sit amet.
          </h1>
        </div>

        {/* Description Section */}
        <div className="text-center w-full max-w-[900px] px-4">
          <p className="text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            eligendi fugit suscipit harum, magnam molestias doloremque Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Non, error?
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center justify-center text-white p-6 rounded-lg 
                transition-all duration-300 hover:bg-white/5 backdrop-blur-sm group
                min-h-[200px] sm:min-h-[180px] lg:min-h-[220px]"
            >
              <div className="bg-white rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px] 
                flex items-center justify-center transform transition-transform duration-300 
                group-hover:scale-110 group-hover:bg-[#FA9021]">
                <service.icon className="text-[#FA9021] group-hover:text-white w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
              </div>
              <div className="text-center text-sm md:text-base capitalize font-medium">
                {service.title}
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <FaArrowRight className="text-[#FA9021] w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industry;