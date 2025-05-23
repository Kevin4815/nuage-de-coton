import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-sky-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600 title-font">Nuage de coton</h3>
            <p className="text-gray-700 mb-4">
              Maison d&apos;Assistante Maternelle accueillant vos enfants de 10 semaines à 4 ans dans un cadre
              chaleureux et ludique.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-teal-600 hover:text-teal-700">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-teal-600 hover:text-teal-700">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:contact@nuage-de-coton.fr" className="text-teal-600 hover:text-teal-700">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600 title-font">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-teal-600">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-700 hover:text-teal-600">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-teal-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-teal-600">
                  Pré-inscription
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600 title-font">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  123 Rue des nuages
                  <br />
                  75000 Paris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">contact@nuagedecoton.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-300 pt-6 text-center text-gray-700 text-sm">
          <p>&copy; {new Date().getFullYear()} Nuage de coton. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
