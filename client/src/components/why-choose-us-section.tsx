import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  DollarSign, 
  Users, 
  Briefcase, 
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: Briefcase,
      title: "18+ Years Experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-9xl font-bold">TRUST US</div>
      </div>
      
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="text-sm text-blue-400 font-medium">// Why Choose Us</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Why Trust Us for
                <br />
                Your IT Needs?
              </h2>
            </div>



            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Professional team working together"
                  className="w-full h-80 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto border border-gray-700"
                >
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
            
            {/* Get Quote Button in Grid */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 flex justify-center mt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Get A Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}