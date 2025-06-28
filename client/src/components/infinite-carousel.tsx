import { motion } from "framer-motion";

export function InfiniteCarousel() {
  const services = [
    "Website Development",
    "UX/UI Design", 
    "Graphics Design",
    "Mobile App Development",
    "Digital Marketing",
    "E-commerce Solutions",
    "SEO Optimization",
    "Brand Identity"
  ];

  // Create enough duplicates for seamless loop
  const duplicatedServices = [...services, ...services, ...services, ...services];

  return (
    <div className="relative bg-blue-600 py-4 overflow-hidden">
      {/* Left Blur - theme aware */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none"></div>
      
      {/* Right Blur - theme aware */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10 pointer-events-none"></div>

      {/* Infinite Scroll Container */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -50 * duplicatedServices.length] // Dynamic width calculation
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedServices.map((service, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0 mx-6"
          >
            <span className="text-white text-lg font-medium px-4 whitespace-nowrap">
              {service}
            </span>
            <span className="text-white/60 text-2xl mx-4">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}