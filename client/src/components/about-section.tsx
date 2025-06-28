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
          className="grid lg:grid-cols-3 gap-12 items-center"
        >
          {/* Left Side - Stats and Text */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">// About Us</div>
              <h2 className="text-4xl font-bold leading-tight">
                Transforming Ideas
                <br />
                into <span className="text-blue-600">Digital Reality</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className="text-5xl font-bold text-blue-600"
                >
                  99%
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  className="text-5xl font-bold text-blue-600"
                >
                  2000+
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                  className="text-5xl font-bold text-blue-600"
                >
                  150+
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Team Members
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="text-2xl font-script text-blue-600 italic">
                Jeny Alexander • CEO
              </div>
            </motion.div>
          </motion.div>

          {/* Center - Team Images */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Team member 1"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b332c2c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Team member 2"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Team member 3"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Team member 4"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
            
            {/* Trust Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
              transition={{ duration: 0.8, delay: 1, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-full shadow-lg"
            >
              <div className="text-center">
                <div className="text-lg font-bold">5★</div>
                <div className="text-xs">Trusted</div>
              </div>
            </motion.div>

            {/* Decorative Stars */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 text-blue-400 text-2xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 -right-4 text-blue-300 text-lg"
            >
              ✧
            </motion.div>
          </motion.div>

          {/* Right Side - Services */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">// Our Services</div>
              <h3 className="text-3xl font-bold">
                Services We Provide to
                <br />
                Elevate Your <span className="text-blue-600">Business</span>
              </h3>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <div className="font-semibold">UX/UI Design</div>
                    <div className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground">→</div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Mobile App Development</div>
                    <div className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground">→</div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Website Development</div>
                    <div className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground">→</div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
