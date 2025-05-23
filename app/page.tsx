import Image from "next/image"
import Link from "next/link"
import { Baby, Clock, Heart, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Waves */}
      <section className="w-full relative overflow-hidden bg-sky-200 pt-10 pb-32">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4 title-font">
                Bienvenue à Nuage de coton
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700">
                Notre Maison d&apos;Assistante Maternelle accueille vos enfants de 10 semaines à 4 ans dans un cadre
                chaleureux et ludique.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-bold rounded-full"
              >
                Je pré-inscris mon enfant
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/enfant-nuage.jpg?height=320&width=320"
                  alt="Enfants jouant"
                  width={320}
                  height={320}
                  className="rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 bg-pink-400 rounded-full p-3 border-2 border-white">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f0f9ff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Notre Structure */}
      <section className="w-full py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-600 title-font">Notre Structure</h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-700">
                La MAM Nuage de coton accueille vos enfants de 10 semaines à 4 ans, dans des locaux aménagés pour
                l&apos;épanouissement, le développement et l&apos;éveil de votre enfant.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Située dans un quartier calme et verdoyant, notre MAM dispose de plusieurs places de parking facilitant
                la dépose de votre enfant.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                C&apos;est dans un cadre lumineux et chaleureux, ainsi qu&apos;un joli jardin, que vos enfants seront
                accueillis, tout un univers dédié à la petite enfance.
              </p>
              <button className="px-4 py-2 rounded-full border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                En savoir plus
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/maison.jpg"
                alt="Notre structure"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="w-full py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-600 title-font">
            Des valeurs qui nous sont chères
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-600">Bienveillance</h3>
              <p className="text-gray-600">
                Nous accueillons chaque enfant avec attention et respect de son individualité.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                <Baby className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-600">Épanouissement</h3>
              <p className="text-gray-600">Nous favorisons le développement et l&apos;autonomie de chaque enfant.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-600">Créativité</h3>
              <p className="text-gray-600">Nous encourageons l&apos;imagination et l&apos;expression artistique des enfants.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-600">Adaptation</h3>
              <p className="text-gray-600">Nous respectons le rythme et les besoins individuels de chaque enfant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-sky-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 title-font">Venez découvrir notre MAM</h2>
            <p className="text-lg mb-8 text-gray-700">
              Nous serions ravis de vous accueillir et de vous faire visiter notre espace dédié aux enfants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-bold rounded-full"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/a-propos"
                className="px-6 py-3 rounded-full border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        {/* Waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f0f9ff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  )
}
