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
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Organic collage design matching the image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-lg">
              {/* Main organic container with blue background */}
              <div className="relative">
                {/* Blue organic background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[4rem] transform rotate-3 scale-105"></div>

                {/* Content container */}
                <div className="relative z-10 p-8">
                  {/* Top section with team image */}
                  <div className="mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                      alt="Team collaboration meeting"
                      className="w-full h-48 object-cover rounded-[2rem] shadow-lg"
                    />
                  </div>

                  {/* Bottom section with two images side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                      alt="Team working together"
                      className="w-full h-32 object-cover rounded-[1.5rem] shadow-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                      alt="Team collaboration"
                      className="w-full h-32 object-cover rounded-[1.5rem] shadow-lg"
                    />
                  </div>
                </div>

                {/* Professional individual image positioned on the right */}
                <div className="absolute -top-4 -right-8 z-20">
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400"
                    alt="Professional man"
                    className="w-32 h-40 object-cover rounded-[2rem] shadow-xl border-4 border-white"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 text-blue-400 text-5xl select-none pointer-events-none z-30"
              >
                ✦
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -left-4 text-blue-300 text-3xl select-none pointer-events-none z-30"
              >
                ✧
              </motion.div>

              {/* Additional small decorative stars */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-16 -right-6 text-blue-200 text-2xl select-none pointer-events-none z-30"
              >
                ✦
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-blue-600 font-medium">
                // About Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transforming <span className="text-blue-600">Ideas</span>
                <br />
                into <span className="text-blue-600">Digital Reality</span>
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <motion.div variants={itemVariants} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  150+
                </motion.div>
                <div className="text-sm text-gray-500">Team Members</div>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  2000+
                </motion.div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  99%
                </motion.div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="text-3xl font-script text-gray-800 dark:text-gray-200 italic">
                Usman Jolaha{" "}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Usman Jolaha • CEO
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
