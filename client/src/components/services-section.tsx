import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Shield, Zap, Globe, Headphones, Settings } from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and threat prevention strategies.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your application performance with cutting-edge optimization techniques and monitoring.",
    },
    {
      icon: Globe,
      title: "Global Solutions",
      description: "Expand your reach worldwide with scalable international business solutions and localization.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your business running smoothly.",
    },
    {
      icon: Settings,
      title: "Custom Integration",
      description: "Seamlessly integrate your existing systems with modern solutions for improved efficiency.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Additional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to support and grow your business beyond development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 bg-muted/50 dark:bg-muted/20 rounded-2xl hover:shadow-xl transition-all duration-300 border"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6"
              >
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <button className="text-primary font-semibold hover:underline transition-all duration-200">
                Learn more →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
