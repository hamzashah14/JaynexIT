import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Lightbulb, Layers, Smile } from "lucide-react";

export function WorkProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
    {
      number: "01",
      icon: FileText,
      title: "Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      number: "03",
      icon: Layers,
      title: "Implementation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      number: "04",
      icon: Smile,
      title: "Final Result",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ];

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-blue-600 font-medium mb-4">// Our Work Process</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Our Proven <span className="text-blue-600">Work Process</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gray-300 dark:bg-gray-600 transform translate-x-8"></div>
              )}
              
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <step.icon className="h-8 w-8 text-white" />
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-900 text-blue-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-blue-600">
                  {step.number}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}