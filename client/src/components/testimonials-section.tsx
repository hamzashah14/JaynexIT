import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      rating: 5,
      text: "TechFlow transformed our outdated website into a modern, user-friendly platform. The team's professionalism and attention to detail exceeded our expectations. Highly recommended!",
      author: "Bessie Cooper",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "A wonderful experience working with TechFlow. They delivered our mobile app ahead of schedule and the quality surpassed our expectations. Excellent communication throughout the project.",
      author: "Jenny Wilson",
      position: "Owner, Furniture Store",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="testimonials" className="py-20 bg-muted/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Testimonials: Trusted by <span className="gradient-text">Our Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-card p-8 rounded-2xl shadow-lg border"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground">{testimonial.rating}.0</span>
              </div>
              <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author} testimonial photo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl italic mb-6">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              </blockquote>
              <div className="font-semibold text-lg">Jeny Alexander - CEO</div>
              <div className="text-blue-200">Furniture Store</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
