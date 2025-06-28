import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-20 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 py-20">
        <div className="max-w-3xl text-left">
          {/* Small tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-blue-400 text-lg font-medium">/// Experience The Best IT Solutions</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8"
          >
            Where <span className="text-blue-400">Creativity</span>
            <br />
            Meets Cutting-Edge
            <br />
            Technology
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 h-10 px-8 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
            >
              Explore More →
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="bg-transparent text-white underline hover:bg-transparent hover:text-white border-none shadow-none px-3 h-auto font-normal text-base"
            >
              View All Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Services Scroll */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-600 py-4 overflow-hidden">
        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-white text-lg font-medium"
        >
          <span className="mx-8">✦ Website Development</span>
          <span className="mx-8">✦ UX/UI Design</span>
          <span className="mx-8">✦ Graphics Design</span>
          <span className="mx-8">✦ Website Development</span>
          <span className="mx-8">✦ UX/UI Design</span>
          <span className="mx-8">✦ Graphics Design</span>
        </motion.div>
      </div>
    </section>
  );
}