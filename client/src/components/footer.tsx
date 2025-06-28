import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blogs", label: "Blogs" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
    { href: "#portfolio", label: "Portfolio" }, // Added to balance
  ];

  // Split services into two groups for better balance
  const servicesColumn1 = [
    { href: "#website-development", label: "Website Development" },
    { href: "#mobile-app-development", label: "Mobile App Development" },
    { href: "#ui-ux-design", label: "UI/UX Design" },
  ];

  const servicesColumn2 = [
    { href: "#data-analytics", label: "Data Analytics" },
    { href: "#cybersecurity", label: "Cybersecurity" },
    { href: "#performance-optimization", label: "Performance Optimization" },
  ];

  const contactInfo = [
    { icon: Mail, text: "example@gmail.com" },
    { icon: Phone, text: "(000) 000-0000" },
    { icon: MapPin, text: "New Jersey 45563" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <button
                onClick={() => scrollToSection("#home")}
                className="text-3xl font-bold"
              >
                <span className="gradient-text">Jaynex</span><span className="text-white">IT</span>
              </button>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering your business with innovative IT solutions and expert services to drive success and growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white dark:text-white hover:text-blue-600" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Balanced 4-column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-full">
            {/* Services Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start h-full"
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <div className="space-y-3 flex-grow">
                {servicesColumn1.map((service) => (
                  <button
                    key={service.href}
                    onClick={() => scrollToSection(service.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-left text-sm"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Services Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start h-full"
            >
              <h4 className="text-lg font-semibold mb-6 text-transparent">Services</h4> {/* Invisible header for alignment */}
              <div className="space-y-3 flex-grow">
                {servicesColumn2.map((service) => (
                  <button
                    key={service.href}
                    onClick={() => scrollToSection(service.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-left text-sm"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start h-full"
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3 flex-grow">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-left text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start h-full"
            >
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 flex-grow">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start text-gray-300 text-sm">
                    <contact.icon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="break-words">{contact.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            Copyright © 2025 IT Company. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}