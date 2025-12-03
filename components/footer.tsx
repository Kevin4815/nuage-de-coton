import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#78A1BB] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#EBF5EE] title-font">Nuage de coton</h3>
            <p className="text-gray-700 mb-4">
              Maison d&apos;Assistante Maternelle accueillant vos enfants de 10 semaines à 3 ans dans un cadre
              chaleureux et ludique.
            </p>
           
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#EBF5EE] title-font">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-[#EBF5EE]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-700 hover:text-[#EBF5EE]">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-[#EBF5EE]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-[#EBF5EE]">
                  Pré-inscription
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#EBF5EE] title-font">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#283044] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  1325 Route de Caraman
                  <br />
                  81500 Lavaur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#283044] flex-shrink-0" />
                <span className="text-gray-700">01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#283044] flex-shrink-0" />
                <span className="text-gray-700">mamnuagedecoton@gmail.com</span>
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
