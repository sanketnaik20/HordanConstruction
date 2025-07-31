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
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Book a Free Consultation or drop us a message.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <Card className="w-full shadow-lg">
              <CardContent className="p-6 space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="w-5 h-5 text-black" />
                  <span className="text-lg text-gray-700">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="w-5 h-5 text-black" />
                  <span className="text-lg text-gray-700">
                    contact@hordan.com
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  We usually respond within 24 hours. Feel free to reach out
                  with your queries or ideas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="w-full shadow-lg">
              <CardContent className="p-6 space-y-4">
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Textarea placeholder="Your Message" rows={4} required />
                  <Button type="submit" className="w-full">
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
