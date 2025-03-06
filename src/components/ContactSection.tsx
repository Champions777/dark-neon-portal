
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  };

  const inputVariants = {
    focus: {
      boxShadow: "0 0 15px rgba(14, 165, 233, 0.5)",
      borderColor: "rgba(14, 165, 233, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-blue/10">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Get In Touch</h2>
          <p className="text-gray-400 max-w-lg mx-auto mt-4">
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-neon-blue/20 p-3 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a href="mailto:iyappansanthosh2004@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                        iyappansanthosh2004@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-neon-blue/20 p-3 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <a href="tel:+918778294438" className="text-gray-400 hover:text-neon-blue transition-colors">
                        +91-87782 94438
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-neon-blue/20 p-3 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">LinkedIn</h4>
                      <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300 text-sm">Your Name</label>
                    <motion.input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 focus:outline-none py-3 px-4 rounded-lg text-white"
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300 text-sm">Your Email</label>
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 focus:outline-none py-3 px-4 rounded-lg text-white"
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-300 text-sm">Your Message</label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 focus:outline-none py-3 px-4 rounded-lg text-white"
                      whileFocus="focus"
                      variants={inputVariants}
                    ></motion.textarea>
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg group bg-neon-blue bg-opacity-10 backdrop-blur-sm border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full"
                      whileHover={{ 
                        scale: isSubmitting ? 1 : 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <span className="relative text-white group-hover:text-white transition-colors duration-300">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:bg-neon-blue transition-all duration-300"></div>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:neon-glow-blue transition-all duration-300"></div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
