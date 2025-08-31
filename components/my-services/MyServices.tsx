import myServicesData from "@/instances/myservices-data";

export default function MyServices() {
  return (
    <section className="relative bg-black text-white py-12 md:py-32 px-6 md:px-6 overflow-hidden">
      {/* Background วงกลมสว่าง */}
      <div className="absolute left-1/2 top-28 md:top-50 -translate-x-1/2 z-0 w-full flex justify-center pointer-events-none">
        <div className="w-[350px] h-[200px] md:w-[400px] md:h-[300px] bg-white/20 rounded-full blur-[120px] md:blur-[180px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="flex justify-center mb-3 md:mb-4">
          <span className="px-4 md:px-5 py-1 rounded-[8px] bg-[#191919] text-white text-xs md:text-sm">
            My Services
          </span>
        </div>
        <h1 className="text-lg md:text-xl font-normal text-center mb-8 md:mb-12 text-[#929CA5]">
          What Services I Provide ?
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {myServicesData.services.map((service, index) => (
            <div
              key={service.id}
              className={`
                bg-[#000000] rounded-xl px-6 py-8 md:px-8 md:py-10 
                border border-[#FFFFFF] hover:border-gray-400 transition 
                shadow-sm flex flex-col items-center text-center
                max-w-sm w-full
                ${index === 2 ? "sm:col-span-2 sm:justify-self-center lg:col-span-1" : ""}
              `}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-[#7A7B85] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
