"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react";

export default function Contact() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSendSucces, setIsSendSucces] = useState(false);
  const [isSendError, setIsSendError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try{
      const res = await fetch('https://nuage-de-coton.novaryadigital.fr/contact.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone,
          message,
        })
      });
    
      const data = await res.json();
      console.log("Réponse du serveur :", data);
  
      setFirstname("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
  
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
              Envie d'en savoir d'avantage sur notre MAM ? Laissez-nous un petit message via le formulaire, nous vous répondrons avec plaisir
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <input
                        type="text"
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        id="firstName"
                        placeholder="Votre prénom"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        required
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastName"
                        placeholder="Votre nom"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

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

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#5e503f] title-font">
            Comment nous trouver
          </h2>

          <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Carte interactive ici</p>
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
