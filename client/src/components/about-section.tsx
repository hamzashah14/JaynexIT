import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Team Images with rounded design */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main rounded container with blue background */}
              <div className="bg-blue-600 rounded-[3rem] p-8 relative overflow-hidden">
                {/* Top team photo */}
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                    alt="Team collaboration meeting"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                
                {/* Bottom team photo */}
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                    alt="Team working together"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Trust Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ duration: 0.8, delay: 1, type: "spring" }}
                className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-blue-700 text-white p-4 rounded-full shadow-lg border-4 border-white"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">5★</div>
                  <div className="text-xs">Trusted</div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 text-blue-400 text-3xl"
              >
                ✦
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 -right-8 text-blue-300 text-2xl"
              >
                ✧
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-blue-600 font-medium">// About Us</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transforming <span className="text-blue-600">Ideas</span>
                <br />
                into <span className="text-blue-600">Digital Reality</span>
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  150+
                </motion.div>
                <div className="text-sm text-gray-500">
                  Team Members
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  2000+
                </motion.div>
                <div className="text-sm text-gray-500">
                  Happy Clients
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  99%
                </motion.div>
                <div className="text-sm text-gray-500">
                  Client Satisfaction
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="text-3xl font-script text-gray-800 dark:text-gray-200 italic">Usman Jolaha </div>
              <div className="text-sm text-gray-500 mt-1">Usman Jolaha • CEO</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
