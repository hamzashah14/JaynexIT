import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

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
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-muted-foreground">{info.details}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* World Map Section */}
            <div className="mt-8">
              <div className="relative bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
                {/* Simple World Map SVG */}
                <svg 
                  viewBox="0 0 400 200" 
                  className="w-full h-40 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                >
                  {/* Continents simplified shapes */}
                  <path d="M50 80 Q60 70, 80 75 L100 85 Q110 90, 120 85 L140 80 Q150 85, 160 80 L180 85 Q190 80, 200 85 L220 80 Q230 85, 250 80 L270 85 Q280 90, 300 85 L320 80 Q330 75, 350 80 L50 80 Z" opacity="0.6"/>
                  <path d="M60 100 Q70 95, 90 100 L110 110 Q120 115, 140 110 L160 105 Q170 100, 190 105 L210 110 Q220 115, 240 110 L260 105 Q270 100, 290 105 L310 110 Q320 105, 340 110 L60 100 Z" opacity="0.4"/>
                  <path d="M70 130 Q80 125, 100 130 L120 140 Q130 145, 150 140 L170 135 Q180 130, 200 135 L220 140 Q230 145, 250 140 L270 135 Q280 130, 300 135 L320 140 Q330 135, 350 140 L70 130 Z" opacity="0.8"/>
                </svg>
                
                {/* Vector Arrow pointing to location */}
                <div className="absolute top-16 left-32">
                  <div className="relative">
                    {/* Arrow */}
                    <svg width="30" height="30" className="text-red-500">
                      <path d="M15 5 L25 15 L20 15 L20 25 L10 25 L10 15 L5 15 Z" fill="currentColor"/>
                    </svg>
                    
                    {/* "Here we are" banner */}
                    <div className="absolute -top-8 -left-8 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
                      Here we are
                    </div>
                  </div>
                </div>
                
                {/* Location marker */}
                <div className="absolute top-20 left-36 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-muted/50 dark:bg-muted/20 p-8 rounded-2xl border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Enter your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
