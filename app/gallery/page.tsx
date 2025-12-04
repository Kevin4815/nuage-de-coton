import Image from "next/image"
import Link from "next/link"
import { Camera, Baby, Home, Trees, Clock, Sparkles } from "lucide-react"

export default function MamGallery() {
  return (
    <div className="flex flex-col items-center">

      {/* <section className="w-full relative overflow-hidden bg-[#78A1BB] pt-10 pb-60 md:pb-10">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#EBF5EE] mb-4 title-font">
                La MAM en images
              </h1>
              <p className="text-lg md:text-xl mb-6 text-[#EBF5EE]">
                Découvrez en photos notre Maison d&apos;Assistantes Maternelles : ses espaces de vie, ses coins de jeu,
                ses moments de douceur et son jardin pensé pour les tout-petits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#8B786D] hover:bg-[#BFA89E] text-white font-bold rounded-full"
                >
                  Prendre contact
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Espace de vie de la MAM"
                  width={320}
                  height={320}
                  className="rounded-3xl border-4 border-white shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f0f9ff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section> */}

<section className="w-full relative overflow-hidden bg-[#78A1BB] pt-10 pb-32">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#EBF5EE] mb-4 title-font">
              La MAM en images
              </h1>
              <p className="text-lg md:text-xl mb-6 text-[#EBF5EE]">
                Découvrez en photos notre Maison d&apos;Assistantes Maternelles : ses espaces de vie, ses coins de jeu,
                ses moments de douceur et son jardin pensé pour les tout-petits.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#8B786D] hover:bg-[#BFA89E] text-white font-bold rounded-full"
              >
                Nous contactez
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                  src="/images/mam/no-image.jpg"
                  alt="Espace de vie de la MAM"
                  width={320}
                  height={320}
                  className="rounded-3xl border-4 border-white shadow-lg object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-pink-400 rounded-full p-3 border-2 border-white">
                  <Camera className="w-8 h-8 text-white" />
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

      {/* Grille photos */}
      <section className="w-full py-16 bg-sky-50 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#78A1BB] title-font">
            Un cocon pensé pour les tout-petits
          </h2>

          {/* Légende / intro */}
          <p className="max-w-3xl mx-auto text-center text-lg mb-10 text-[#5e503f]">
            Chaque espace de la MAM Nuage de coton a été imaginé pour offrir sécurité, douceur et découvertes :
            coin jeux, espace calme, coin repas, salle de motricité, jardin... Voici un aperçu en images.
          </p>

          {/* Grille responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Carte 1 - Espace de vie */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden border-none">
              <div className="relative w-full h-56">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Espace de jeux principal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#5e503f]">
                  <Home className="w-5 h-5 text-[#8B786D]" />
                  <h3 className="font-semibold text-lg">Espace de vie et de jeux</h3>
                </div>
                <p className="text-sm text-[#5e503f]">
                  Un espace lumineux, sécurisé et chaleureux où les enfants évoluent, jouent et partagent des moments
                  ensemble.
                </p>
              </div>
            </article>

            {/* Carte 2 - Coin bébé */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden border-none">
              <div className="relative w-full h-56">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Coin bébé"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#5e503f]">
                  <Baby className="w-5 h-5 text-[#8B786D]" />
                  <h3 className="font-semibold text-lg">Coin bébé</h3>
                </div>
                <p className="text-sm text-[#5e503f]">
                  Un espace cocooning adapté aux tout-petits, avec tapis d&apos;éveil, jeux sensoriels et matériel
                  adapté.
                </p>
              </div>
            </article>

            {/* Carte 3 - Coin lecture / calme */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden border-none">
              <div className="relative w-full h-56">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Coin lecture et calme"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#5e503f]">
                  <Home className="w-5 h-5 text-[#8B786D]" />
                  <h3 className="font-semibold text-lg">Coin calme & lecture</h3>
                </div>
                <p className="text-sm text-[#5e503f]">
                  Un coin douillet pour se poser, lire des histoires, se rassurer et profiter de moments plus calmes.
                </p>
              </div>
            </article>

            {/* Carte 4 - Salle de motricité */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden border-none">
              <div className="relative w-full h-56">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Espace de motricité"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#5e503f]">
                  <Sparkles className="w-5 h-5 text-[#8B786D]" />
                  <h3 className="font-semibold text-lg">Espace motricité</h3>
                </div>
                <p className="text-sm text-[#5e503f]">
                  Des modules de motricité pour grimper, ramper, sauter, et développer sa confiance en soi en toute
                  sécurité.
                </p>
              </div>
            </article>

            {/* Carte 5 - Espace repas */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden border-none">
              <div className="relative w-full h-56">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Espace repas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#5e503f]">
                  <Clock className="w-5 h-5 text-[#8B786D]" />
                  <h3 className="font-semibold text-lg">Coin repas</h3>
                </div>
                <p className="text-sm text-[#5e503f]">
                  Un espace convivial pour les repas, dans le respect du rythme de chacun et des habitudes familiales.
                </p>
              </div>
            </article>

            {/* Carte 6 - Jardin */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden border-none">
              <div className="relative w-full h-56">
                <Image
                  src="/images/mam/no-image.jpg"
                  alt="Jardin de la MAM"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#5e503f]">
                  <Trees className="w-5 h-5 text-[#8B786D]" />
                  <h3 className="font-semibold text-lg">Jardin & extérieur</h3>
                </div>
                <p className="text-sm text-[#5e503f]">
                  Un extérieur sécurisé pour profiter du plein air, observer la nature, jouer et se dépenser.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Petit CTA bas de page */}
      <section className="w-full py-14 bg-[#f2e9e4]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#78A1BB] title-font">
              Envie de découvrir la MAM en vrai ?
            </h3>
            <p className="text-lg mb-6 text-[#5e503f]">
              Les photos, c&apos;est bien... mais rien ne remplace une visite sur place pour ressentir l&apos;ambiance
              et échanger avec nous.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#8B786D] hover:bg-[#BFA89E] text-white font-bold rounded-full"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}