
export default function APropos() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-[#78A1BB] pt-10 pb-32">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EBF5EE] mb-6 title-font">À Propos de Nous</h1>
            <p className="text-lg md:text-xl mb-6 text-[#EBF5EE]">
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
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#78A1BB] title-font mb-10">
      Qui nous sommes ?
    </h2>

    {/* GRID : 1 colonne jusqu'à lg, 2 colonnes seulement en lg et + */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* Colonne gauche : nuage */}
      <div className="flex justify-center w-full">
        <svg
          viewBox="0 0 500 350"
          className="w-full h-auto"
        >
          <defs>
            <clipPath id="cloudClip">
              <path d="
                M150 300
                C 100 300, 70 260, 75 220
                C 30 210, 35 160, 80 150
                C 60 110, 110 70, 160 90
                C 180 40, 260 40, 290 90
                C 340 70, 390 110, 370 150
                C 420 160, 430 210, 385 220
                C 400 260, 370 300, 320 300

                C 290 320, 260 330, 230 300
                C 200 330, 170 320, 150 300
                Z"
              />
            </clipPath>
          </defs>

          <image
            href="/images/personnes.jpg?height=320&width=320"
            width="500"
            height="450"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#cloudClip)"
          />
        </svg>
      </div>

      {/* Colonne droite : texte */}
      <div className="max-w-3xl mx-auto px-2 md:px-6 md:py-4">
        <p className="text-center text-lg leading-relaxed text-[#5e503f] mb-6">
          <span className="font-semibold text-[#283044]">Jordane</span> et 
          <span className="font-semibold text-[#283044]"> Sylvana</span>, deux professionnelles engagées et complémentaires, réunies par la même passion : accompagner les enfants dans la douceur, le respect et la bienveillance.
        </p>

        <p className="text-center text-lg leading-relaxed text-[#5e503f] mb-6">
          Fortes de nos expériences auprès de jeunes enfants, nous partageons des valeurs communes qui sont au cœur de chaque journée à la MAM : l’écoute, la patience, la sécurité affective et le respect du rythme de chacun.
        </p>

        <p className="text-center text-lg leading-relaxed text-[#5e503f] mb-6">
          À travers notre présence chaleureuse et nos personnalités différentes mais harmonieuses, nous offrons un environnement où chaque enfant peut grandir à son rythme, s’exprimer librement, découvrir, expérimenter et s’épanouir.
        </p>

        <p className="text-center text-lg leading-relaxed text-[#5e503f]">
          Notre objectif : créer un lieu où l’on se sent en confiance, où l’enfant peut évoluer sereinement et où les familles se sentent accompagnées et soutenues.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Notre Projet Pédagogique */}
      <section className="w-full py-16 bg-[#f2e9e4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#78A1BB] title-font">
            Sur quel projet se repose notre MAM ?
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2 text-center mx-auto">
            <p className="text-lg mb-6 text-[#5e503f]">
              À la MAM Nuage de Coton, notre projet pédagogique s’appuie sur une valeur essentielle : l’expression et la créativité. Nous souhaitons créer un environnement rassurant et bienveillant dans lequel l’enfant peut explorer, jouer, observer et apprendre à son propre rythme.
              La bienveillance, l’écoute et la sécurité affective sont au cœur de chacune de nos journées.
            </p>

            <p className="text-lg mb-6 text-[#5e503f]">
              Nos activités encouragent l’autonomie, l’estime de soi, la découverte du monde et le plaisir d’apprendre. Nous proposons des temps de jeux libres, des ateliers sensoriels, du matériel artistique ainsi que des moments de calme et de relaxation afin que l’enfant s’exprime en toute liberté. La nature occupe également une place importante dans notre quotidien : nous aimons passer du temps à l’extérieur pour observer la nature, écouter les oiseaux, manipuler l’eau et profiter du jardin. Nous souhaiterions placer une petite plantation avec les enfants afin d’expérimenter, de prendre soin du vivant et de s’émerveiller en douceur.
            </p>

            <p className="text-lg mb-6 text-[#5e503f]">
              Dans notre MAM, tout est pensé pour le bien-être et la santé de vos enfants. Nous utilisons uniquement des produits naturels pour l’entretien et les jouets ainsi que des couches lavables afin de préserver l’environnement, leur santé et leur confort quotidien. Cela fait partie de notre engagement écologique et de notre volonté d’offrir un lieu sain et respectueux.
            </p>

            </div>
          </div>
        </div>
      </section>

      {/* Nos Locaux */}
      {/* <section className="w-full py-16 bg-sky-50">
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
      </section> */}
    </div>
  )
}
