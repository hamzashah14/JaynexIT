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
    <section id="about" className="py-20 bg-muted/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            About <span className="gradient-text">TechFlow</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Transforming ideas into digital reality since 2020. We're passionate about creating innovative solutions that make a difference.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold">Our Journey & Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between creativity and technology, TechFlow has evolved into a leading digital solutions provider. We believe in the power of innovation to transform businesses and create meaningful experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="text-center p-6 bg-card rounded-lg shadow-md border"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className="text-3xl font-bold text-primary"
                >
                  200+
                </motion.div>
                <div className="text-muted-foreground">Happy Clients</div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center p-6 bg-card rounded-lg shadow-md border"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  className="text-3xl font-bold text-primary"
                >
                  99%
                </motion.div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Team working together on innovative projects"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
