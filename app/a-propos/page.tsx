import Image from "next/image"
import { Brain, HeartHandshake, Utensils } from "lucide-react"

export default function APropos() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-sky-200 pt-10 pb-32">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6 title-font">À Propos de Nous</h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Découvrez notre équipe et notre projet pédagogique pour le bien-être et l&apos;épanouissement de vos
              enfants.
            </p>
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

    {/* Notre Équipe */}
    <section className="w-full py-16 bg-sky-50">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-600 title-font">
        Notre Équipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center max-w-4xl mx-auto">
        {/* Marie */}
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square relative">
            <Image
                src="/images/personne-2.jpg?height=400&width=300"
                alt="Sylvana"
                fill
                className="object-cover"
            />
            </div>
            <div className="p-4">
            <h3 className="text-lg font-bold mb-1 text-teal-600">Sylvana</h3>
            <p className="text-sm text-gray-500 mb-2">Assistante Maternelle</p>
            <p className="text-sm text-gray-600">
                Diplômée du CAP Petite Enfance avec 10 ans d&apos;expérience, Sylvana est passionnée par l&apos;éveil
                des tout-petits.
            </p>
            </div>
        </div>

        {/* Lucie */}
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square relative">
            <Image
                src="/images/personne-1.jpg?height=400&width=300"
                alt="Jordane"
                fill
                className="object-cover"
            />
            </div>
            <div className="p-4">
            <h3 className="text-lg font-bold mb-1 text-teal-600">Jordane</h3>
            <p className="text-sm text-gray-500 mb-2">Assistante Maternelle</p>
            <p className="text-sm text-gray-600">
                Spécialisée dans l&apos;éveil musical et artistique, Jordane anime des ateliers créatifs adaptés aux
                tout-petits.
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>

      {/* Notre Projet Pédagogique */}
      <section className="w-full py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-600 title-font">
            Notre Projet Pédagogique
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/enfant-jouant.jpg?height=400&width=500"
                alt="Enfants jouant"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6 text-gray-700">
                Au sein de notre structure, nous pratiquons la motricité spontanée qui favorise l&apos;esprit
                d&apos;initiative et la créativité de l&apos;enfant. Laisser l&apos;enfant libre de ses mouvements lui
                permet d&apos;explorer son corps et de se développer en toute confiance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-teal-600">Développement cognitif</h3>
                    <p className="text-gray-600">
                      Nous proposons des activités stimulantes adaptées à chaque âge pour favoriser
                      l&apos;apprentissage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-teal-600">Socialisation</h3>
                    <p className="text-gray-600">
                      Nous encourageons le partage et l&apos;apprentissage de la vie en collectivité dans un cadre
                      bienveillant.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-teal-600">Alimentation équilibrée</h3>
                    <p className="text-gray-600">
                      Nous proposons des repas sains et variés, préparés avec des produits frais et de saison.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Locaux */}
      <section className="w-full py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-600 title-font">Nos Locaux</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image src="/images/jeux.jpg?height=300&width=500" alt="Espace jeux" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-teal-600">Espace jeux</h3>
              <p className="text-gray-600">Un espace coloré et sécurisé avec des jeux adaptés à chaque âge.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image src="/images/sieste.jpg?height=300&width=500" alt="Coin repos" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-teal-600">Coin repos</h3>
              <p className="text-gray-600">Un espace calme et douillet pour les siestes et moments de détente.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image src="/images/repas.jpg?height=300&width=500" alt="Espace repas" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-teal-600">Espace repas</h3>
              <p className="text-gray-600">Un coin convivial pour les repas et les goûters en collectivité.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/exterieur.webp?height=300&width=500"
                  alt="Jardin extérieur"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-600">Jardin extérieur</h3>
              <p className="text-gray-600">Un espace extérieur sécurisé pour profiter du plein air et de la nature.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
