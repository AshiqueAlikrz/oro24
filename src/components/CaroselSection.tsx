import CaroselImageBg from "@/assets/png/pexelsMathilde.png";

const CaroselSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between relative min-h-[250px] sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
      <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 py-6 sm:py-8 md:py-0 md:flex md:items-center">
        <div className=" lg:px-20 px-0 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-black leading-tight">
            Tailored <span className="font-bold">Services —</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">Seamless, Sustainable, and Cost-Effective</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 relative h-48 sm:h-64 md:h-full">
        <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <img src={CaroselImageBg} alt="Carosel Background" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default CaroselSection;
