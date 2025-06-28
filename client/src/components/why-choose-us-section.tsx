import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, DollarSign, Calendar } from "lucide-react";

export function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Professional Team",
      description: "Expert developers and designers with years of experience in cutting-edge technologies.",
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Recognized for excellence in design and development by industry leaders and clients.",
    },
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Competitive pricing without compromising on quality or functionality.",
    },
    {
      icon: Calendar,
      title: "18+ Years Experience",
      description: "Extensive experience across various industries and technologies.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Understanding your requirements and goals",
    },
    {
      number: "2",
      title: "Strategy",
      description: "Developing a comprehensive project strategy",
    },
    {
      number: "3",
      title: "Implementation",
      description: "Executing the plan with precision and quality",
    },
    {
      number: "4",
      title: "Final Result",
      description: "Delivering exceptional results and ongoing support",
    },
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
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Trust Us for Your IT Needs?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <feature.icon className="h-10 w-10" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold">Our Proven Work Process</h3>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                    className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0"
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-blue-100 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Team executing project strategy and implementation"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
