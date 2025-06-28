import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: "example@gmail.com",
    },
    {
      icon: Phone,
      title: "Contact",
      details: "(000) 000-0000",
    },
    {
      icon: MapPin,
      title: "Our Team",
      details: "256a Playfair Media New Jersey 45563",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Abdullah",
      designation: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 2,
      name: "Faran Alam",
      designation: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      id: 3,
      name: "Hamza",
      designation: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      id: 4,
      name: "Nouman",
      designation: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
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

  // UI only, no form logic

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Let's Connect & <span className="gradient-text">Start Building</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss your project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get the latest information</h3>
              <div className="space-y-8">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    {/* Icon placeholder */}
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">{info.title}</div>
                    <div className="text-muted-foreground">{info.details}</div>
                  </div>
                </motion.div>
              ))}

              {/* Our Professional Team Members */}
              <div className="mt-20">
                <h3 className="text-xl font-semibold mb-6">Our Professional Team Members</h3>
                <div className="flex mt-4 -space-x-4">
                  <AnimatedTooltip items={teamMembers} />
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-muted/50 dark:bg-muted/20 p-8 rounded-2xl border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <Input id="subject" placeholder="Enter subject" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
                <Textarea id="message" rows={4} placeholder="Enter your message" />
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
