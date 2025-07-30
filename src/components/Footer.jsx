import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="bg-black border-none text-white shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Hordan Construction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">Building dreams, one brick at a time.</p>
          </CardContent>
        </Card>

        <Card className="bg-black border-none text-white shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-2">
            <a href="/" className="block hover:text-white">Home</a>
            <a href="#services" className="block hover:text-white">Services</a>
            <a href="#projects" className="block hover:text-white">Projects</a>
            <a href="#contact" className="block hover:text-white">Contact</a>
          </CardContent>
        </Card>

        <Card className="bg-black border-none text-white shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Contact Info</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-2">
            <p>📞 +91 98765 43210</p>
            <p>📧 info@hordanconstruction.com</p>
            <p>📍 Goa, India</p>
          </CardContent>
        </Card>

        <Card className="bg-black border-none text-white shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Follow Us</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-2">
            <a href="#" className="block hover:text-white">Facebook</a>
            <a href="#" className="block hover:text-white">Instagram</a>
            <a href="#" className="block hover:text-white">LinkedIn</a>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Hordan Construction. All rights reserved.
      </div>
    </footer>
  )
}