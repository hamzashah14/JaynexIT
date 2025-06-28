import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      rating: 5,
      text: "TechFlow transformed our outdated website into a modern, user-friendly platform. The team's professionalism exceeded our expectations.",
      author: "Bessie Cooper",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Excellent communication throughout the project. They delivered our mobile app ahead of schedule with outstanding quality.",
      author: "Jenny Wilson", 
      position: "Owner, Furniture Store",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Amazing team to work with! They understood our requirements perfectly and delivered beyond our expectations.",
      author: "Robert Johnson",
      position: "CTO, StartupCo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Professional, efficient, and creative. TechFlow helped us achieve our digital transformation goals seamlessly.",
      author: "Sarah Davis",
      position: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Outstanding service and support. The team was responsive and delivered exactly what we needed on time.",
      author: "Michael Brown",
      position: "Founder, InnovateTech",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Incredible attention to detail and user experience. Our new platform has significantly improved our business operations.",
      author: "Emily Wilson",
      position: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
  ];

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          "{testimonial.text}"
        </p>
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900 dark:text-white text-sm">
              {testimonial.author}
            </div>
            <div className="text-gray-500 text-xs">{testimonial.position}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div 
          className="relative space-y-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Blue gradient effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-600/20 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-600/20 to-transparent z-10 pointer-events-none"></div>
          
          {/* First Row - Moving Right to Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: isPaused ? undefined : [0, -100 * duplicatedFirstRow.length / 3]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedFirstRow.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Left to Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: isPaused ? undefined : [-100 * duplicatedSecondRow.length, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSecondRow.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}