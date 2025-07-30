// components/Services.jsx
import { Card, CardContent } from "@/components/ui/card"
import services from "@/data/services.json"
import {
  Home,
  Building,
  Wrench,
  Paintbrush
} from "lucide-react"

const iconMap = {
  home: Home,
  building: Building,
  wrench: Wrench,
  paintbrush: Paintbrush
}

export default function Services() {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <Card
                key={index}
                className="w-full max-w-xs h-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center text-center space-y-4 p-6 h-full justify-between">
                  <Icon className="w-10 h-10 text-black" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}