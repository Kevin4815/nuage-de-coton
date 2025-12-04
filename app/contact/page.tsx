"use client";
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react";
const LeafletMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
      Chargement de la carte...
    </div>
  ),
});
import { formatDate } from "date-fns";
import { fr } from "date-fns/locale";
import dynamic from "next/dynamic";

export default function Contact() {

  // Parent information
  const [parentFirstname, setParentFirstname] = useState("");
  const [parentLastname, setParentLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [commune, setCommune] = useState("");

  // Chil informations
  const [childFirstname, setChildFirstname] = useState("");
  const [childLastname, setcChildLastName] = useState("");
  const [childBirth, setChildBirth] = useState("");

  // Radio
  const [situation, setSituation] = useState("");
  const [accommodationType, setAccommodationType] = useState("");

  const [otherInformations, setOtherInformations] = useState("");
  //-----------------------------------------------//

  const [desiredDatAndTime, setDesiredDatAndTime] = useState("");
  const [desiredStartDate, setDesiredStartDate] = useState("");

  const [message, setMessage] = useState("");

  const [isSendSucces, setIsSendSucces] = useState(false);
  const [isSendError, setIsSendError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    const birthDate = new Date(childBirth);
    const desiredDate = new Date(desiredStartDate);

    const birthDateFrench = formatDate(birthDate, "dd/MM/yyyy", { locale: fr })
    const desiredDateFrench = formatDate(desiredDate, "dd/MM/yyyy", { locale: fr })

    try{
      //const res = await fetch('https://nuage-de-coton.novaryadigital.fr/contact.php', {
      const res = await fetch('http://localhost:8888/test-mail-php/contact.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentFirstname,
          parentLastname,
          email,
          phone,
          commune,
          childFirstname,
          childLastname,
          birthDateFrench,
          situation,
          accommodationType,
          desiredDatAndTime,
          desiredDateFrench,
          message
        })
      });
    
      const data = await res.json();
      console.log("Réponse du serveur :", data);

      // console.log(parentFirstname)
      // console.log(parentLastname)
      // console.log(email)
      // console.log(phone)
      // console.log(commune)

      // console.log(childFirstname)
      // console.log(desiredDate)
      //console.log(formatDate(birthDatFrench, "dd/MM/yyyy", { locale: fr }))
      // console.log(formatDate(desiredDate, "dd/MM/yyyy", { locale: fr }))

      
      // console.log(situation)
      // console.log(otherInformations)
      
      // console.log(accommodationType)
      // console.log(desiredDatAndTime)
      // console.log(desiredStartDate)
      // console.log(message)
  
      setParentFirstname("");
      setParentLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCommune("");
      setChildFirstname("");
      setcChildLastName("");
      setChildBirth("");
      setSituation("");
      setAccommodationType("");
      setDesiredDatAndTime("");
      setDesiredStartDate("");
  
      setIsSendSucces(true);
  
      setTimeout(() => {
        setIsSendSucces(false);
      }, 3000);

    } catch(e){
      console.log("une erreur !!");
      console.log(e);
      setIsSendError(true)
      setTimeout(() => {
        setIsSendError(false);
      }, 3000);
      
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-[#78A1BB] pt-10 pb-32">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EBF5EE] mb-6 title-font">Contactez-Nous</h1>
            <p className="text-lg md:text-xl mb-6 text-[#EBF5EE]">
              Envie d&apos;en savoir d&apos;avantage sur notre MAM ? Laissez-nous un petit message via le formulaire, nous vous répondrons avec plaisir
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

      {/* Contact Form and Info */}
      <section className="w-full py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#5e503f] title-font">Envoyez-nous un message</h2>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6">
                <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
                  <p className="text-lg text-center font-bold">Information sur les parents</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="parent-firstName" className="block text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <input
                        type="text"
                        required
                        value={parentFirstname}
                        onChange={(e) => setParentFirstname(e.target.value)}
                        id="parent-firstName"
                        placeholder="Votre prénom"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="parent-lastName" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        required
                        value={parentLastname}
                        onChange={(e) => setParentLastName(e.target.value)}
                        id="parent-lastName"
                        placeholder="Votre nom"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="votre@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        placeholder="Votre numéro de téléphone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="commune" className="block text-sm font-medium text-gray-700">
                      Commune
                    </label>
                    <input
                      type="commune"
                      required
                      value={commune}
                      onChange={(e) => setCommune(e.target.value)}
                      id="commune"
                      placeholder="Commune"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <p className="text-lg text-center font-bold">Information sur l&apos;enfant</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="child-firstName" className="block text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <input
                        type="text"
                        required
                        value={childFirstname}
                        onChange={(e) => setChildFirstname(e.target.value)}
                        id="child-firstName"
                        placeholder="Prénom enfant"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="child-lastName" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        required
                        value={childLastname}
                        onChange={(e) => setcChildLastName(e.target.value)}
                        id="child-lastName"
                        placeholder="Nom enfant"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="child-birth"
                      className="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Date de naissance de l&apos;enfant
                    </label>

                    <div className="relative">
                      <input
                        type="date"
                        name="child-birth"
                        value={childBirth}
                        onChange={(e) => setChildBirth(e.target.value)}
                        className="
                          w-full
                          appearance-none
                          border border-gray-300
                          rounded-lg
                          px-4 py-2
                          text-gray-700
                          shadow-sm
                          bg-white
                          focus:outline-none
                          focus:ring-2
                          focus:ring-[#78A1BB]
                          focus:border-[#78A1BB]
                          text-base
                        "
                      />
                    </div>
                  </div>

                  <fieldset className="flex flex-col gap-4 md:flex-row md:justify-around md:items-center">
                    <legend className="block text-sm font-medium text-gray-700 pb-2">
                      Situation :
                    </legend>

                    <label htmlFor="born" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="born"
                        name="accommodation-type"
                        value="À naître"
                        className="accent-blue-500"
                        checked={situation === "À naître"}
                        onChange={(e) => setSituation(e.target.value)}
                      />
                      À naître
                    </label>

                    <label htmlFor="infant" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="infant"
                        name="accommodation-type"
                        value="Nourrisson"
                        className="accent-blue-500"
                        checked={situation === "Nourrisson"}
                        onChange={(e) => setSituation(e.target.value)}
                      />
                      Nourrisson
                    </label>

                    <label htmlFor="walker" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="walker"
                        name="accommodation-type"
                        value="Marcheur"
                        className="accent-blue-500"
                        checked={situation === "Marcheur"}
                        onChange={(e) => setSituation(e.target.value)}
                      />
                      Marcheur
                    </label>

                    <label htmlFor="other" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="other"
                        name="accommodation-type"
                        value="Autre"
                        className="accent-blue-500"
                        checked={situation === "Autre"}
                        onChange={(e) => setSituation(e.target.value)}
                      />
                      Autre
                    </label>
                  </fieldset>

                  { situation == "Autre" && <div className="space-y-2">
                    <input
                      type="other-information"
                      required
                      value={otherInformations}
                      onChange={(e) => setOtherInformations(e.target.value)}
                      id="other-information"
                      placeholder="Autres..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div> }

                  <p className="text-lg text-center font-bold">Demande de l&apos;accueil</p>

                  <fieldset className="flex flex-col gap-4 md:flex-row md:justify-around md:items-center">
                    <legend className="block text-sm font-medium text-gray-700 pb-2">
                      Type d&apos;accueil souhaité :
                    </legend>

                    <label htmlFor="regular" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="regular"
                        name="accommodation-type"  // (tu peux garder "situation" si tu veux, mais mieux d'avoir un nom différent du 1er groupe)
                        value="Régulier"
                        className="accent-blue-500"
                        checked={accommodationType === "Régulier"}
                        onChange={(e) => setAccommodationType(e.target.value)}
                      />
                      Régulier
                    </label>

                    <label htmlFor="occasional" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="occasional"
                        name="accommodation-type"
                        value="Occasionnel"
                        className="accent-blue-500"
                        checked={accommodationType === "Occasionnel"}
                        onChange={(e) => setAccommodationType(e.target.value)}
                      />
                      Occasionnel
                    </label>

                    <label htmlFor="after-school" className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        id="after-school"
                        name="accommodation-type"
                        value="Périscolaire"
                        className="accent-blue-500"
                        checked={accommodationType === "Périscolaire"}
                        onChange={(e) => setAccommodationType(e.target.value)}
                      />
                      Périscolaire
                    </label>
                  </fieldset>

                  <div className="space-y-2">
                    <label htmlFor="desired-day-and-time" className="block text-sm font-medium text-gray-700">
                      Jour et horaires souhaités
                    </label>
                    <input
                      type="desired-day-and-time"
                      required
                      value={desiredDatAndTime}
                      onChange={(e) => setDesiredDatAndTime(e.target.value)}
                      id="desired-day-and-time"
                      placeholder="Les jours et horaires que vous souhaitez"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="desired-start-date"
                      className="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Date souhaitée de début d&apos;accueil
                    </label>

                    <div className="relative">
                      <input
                        type="date"
                        name="desired-start-date"
                        value={desiredStartDate}
                        onChange={(e) => setDesiredStartDate(e.target.value)}
                        className="
                          w-full 
                          appearance-none 
                          border border-gray-300 
                          rounded-lg 
                          px-4 py-2 
                          text-gray-700 
                          shadow-sm 
                          bg-white
                          focus:outline-none 
                          focus:ring-2 
                          focus:ring-[#78A1BB] 
                          focus:border-[#78A1BB]
                          text-base
                        "
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message ou questions
                    </label>
                    <textarea
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      placeholder="Votre message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    ></textarea>
                  </div>
                  { isSendSucces && <p className="text-lime-500 text-center">Votre message a bien été envoyés</p> }
                  { isSendError && <p className="text-red-600 text-center">Une erreur est survenue, veuillez réessayer plus tard</p> }
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#8B786D] hover:bg-[#BFA89E] text-white font-bold rounded-full"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#5e503f] title-font">Nos coordonnées</h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#BFA89E] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#8B786D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#5e503f]">Adresse</h3>
                      <p className="text-gray-600">
                        1325 Route de Caraman
                        <br />
                        81500 Lavaur
                        <br />
                        France
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#BFA89E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#8B786D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#5e503f]">Téléphone</h3>
                      <p className="text-gray-600">01 23 45 67 89</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#BFA89E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#8B786D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#5e503f]">Email</h3>
                      <p className="text-gray-600">contact@nuagedecoton.fr</p>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white rounded-xl shadow-md overflow-hidden border-none p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#BFA89E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#8B786D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#5e503f]">Horaires d&apos;ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 7h30 - 18h00
                        <br />
                        Fermé les week-ends et jours fériés
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-[#f2e9e4]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#78A1BB] title-font">
            Comment nous trouver
          </h2>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <LeafletMap />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-inscription CTA */}
      {/* <section className="w-full py-16 bg-[#78A1BB] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EBF5EE] title-font">Formulaire de contact</h2>
            <p className="text-lg mb-8 text-[#EBF5EE]">
              Envie d'en savoir d'avantage sur notre MAM ? Laissez-nous un petit message via le formulaire, nous vous répondrons avec plaisir
            </p>
            <button className="px-6 py-3 bg-[#8B786D] hover:bg-[#BFA89E] text-white font-bold rounded-full">
              Formulaire de contact
            </button>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290" className="w-full">
            <path
              fill="#f0f9ff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section> */}
    </div>
  )
}
