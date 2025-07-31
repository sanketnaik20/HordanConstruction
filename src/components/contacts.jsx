import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Book a free consultation or drop us a message. We are here to help you build your future.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 md:p-8 space-y-6 text-center md:text-left flex flex-col justify-center h-full">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <Phone className="w-6 h-6 text-black" />
                  <span className="text-lg text-gray-800 font-medium">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <Mail className="w-6 h-6 text-black" />
                  <span className="text-lg text-gray-800 font-medium">
                    contact@hordan.com
                  </span>
                </div>
                <p className="text-base text-gray-600 mt-4">
                  We usually respond within 24 hours. Feel free to reach out
                  with your queries or ideas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-5">
                  <Input type="text" placeholder="Your Name" required className="text-base" />
                  <Input type="email" placeholder="Your Email" required className="text-base" />
                  <Textarea placeholder="Your Message" rows={5} required className="text-base" />
                  <Button type="submit" className="w-full text-base font-semibold py-3">
                    Book a Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}