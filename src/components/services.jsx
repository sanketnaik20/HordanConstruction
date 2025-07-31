import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import services from "@/data/services.json";
import { Home, Building, Wrench, Paintbrush } from "lucide-react";

const iconMap = {
  home: Home,
  building: Building,
  wrench: Wrench,
  paintbrush: Paintbrush,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <motion.div
                key={index}
                className="w-full h-full"
                variants={itemVariants}
              >
                <Card className="w-full h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  <CardContent className="flex flex-col items-center text-center space-y-4 p-6 md:p-8 flex-grow">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
                    <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}