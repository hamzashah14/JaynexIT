import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ChevronDown, Monitor, Smartphone, Palette, Database, Shield, Zap } from "lucide-react";
import { AiOutlineGitlab } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeContext } from "./theme-provider";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null); // Add ref for menu button

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    {
      icon: Monitor,
      title: "Website Development",
      description: "Custom websites built with modern technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform data into actionable insights",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance application performance",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      // Check if click is outside both menu and menu button
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-0 right-0 mx-auto max-w-6xl z-50 glassmorphism rounded-2xl shadow-lg transition-all duration-300 bg-white/30 backdrop-blur-md dark:bg-background/30 md:top-4 top-2 px-2 sm:px-6"
    >
      <div className="px-1 sm:px-2 lg:px-3">
         <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <AiOutlineGitlab className={`w-8 h-8 ${theme === "dark" ? "text-white" : "text-black"}`} />
              </div>
              <span className="text-blue-600">Jaynex<span className="text-foreground">IT</span></span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className="hover:text-blue-600 transition-colors duration-200 text-foreground"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="hover:text-blue-600 transition-colors duration-200 text-foreground flex items-center gap-1"
                >
                  Services <ChevronDown className="h-4 w-4" />
                </motion.button>
                
                {/* Hover Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-96 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.title} className="p-3 cursor-pointer hover:bg-muted rounded-lg transition-colors">
                        <div className="flex items-start space-x-3">
                          <service.icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-sm">{service.title}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Quote Button, Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Get Quote Button */}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden md:inline bg-blue-600 hover:bg-blue-700 text-white px-3 rounded-full"
            >
              Get a Quote
            </Button>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-secondary"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef} // Add ref here
              className="md:hidden hover:bg-secondary p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden px-5"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 glassmorphism rounded-2xl mt-2 shadow-xl">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 hover:text-blue-600 transition-colors duration-200 text-foreground"
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Services Dropdown for Mobile */}
                <div className="relative">
                  <button
                    className="block w-full text-left px-3 py-2 hover:text-blue-600 transition-colors duration-200 text-foreground flex items-center justify-between"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="mt-2 w-full max-h-56 overflow-y-auto bg-background border border-border rounded-lg shadow-lg z-50 p-2">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <div key={service.title} className="p-2 cursor-pointer hover:bg-muted rounded-lg transition-colors flex items-start space-x-3">
                            <service.icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sm">{service.title}</div>
                              <div className="text-xs text-muted-foreground">{service.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Get Quote Button for Mobile */}
                <div className="border-t border-border pt-2 mt-2">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
                    onClick={() => {
                      scrollToSection("#contact");
                      setIsMenuOpen(false);
                    }}
                  >
                    Get A Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}