import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 sm:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <motion.div variants={itemVariants} className="sm:col-span-2 md:col-span-1">
          <Card className="bg-transparent border-none text-white shadow-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Hordan Construction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Building dreams, one brick at a time.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-transparent border-none text-white shadow-none">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400 space-y-3">
              <a href="/" className="block hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#services" className="block hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#projects" className="block hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block hover:text-blue-400 transition-colors">
                Contact
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-transparent border-none text-white shadow-none">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400 space-y-3">
              <p>📞 +91 98765 43210</p>
              <p>📧 contact@hordan.com</p>
              <p>📍 Goa, India</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-transparent border-none text-white shadow-none">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400 space-y-3">
              <a href="#" className="block hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="block hover:text-blue-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="block hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        © {new Date().getFullYear()} Hordan Construction. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}