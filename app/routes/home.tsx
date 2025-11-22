import type { Route } from "./+types/home";
import gurkenflieger from "../assets/gurkenflieger.jpeg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gurkenflieger – Übersicht" },
    { name: "description", content: "Die Übersicht unseres Startups." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Was ist unsere Startup-Idee?
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ein smarter Ansatz, um Erntehelfer effizient, zuverlässig und modern zu organisieren.
          </p>
          <div className="mt-8 block text-left mx-20">
            <h1 className="p-4 text-2xl text-bold"><strong>Aktuelle Lage</strong></h1>
            <div className="flex justify-center">
              <div className="text-left text-gray-700 text-md sm:text-lg p-4">
                <span className=" font-medium">
                  Mit unserem Projekt versuchen wir deutsche Landwirde mithilfe von modernen Robotern zu entlasten und unfaire und harte saisonarbeit beenden.
                  Mit einem Team bestehend aus 5 Personen haben wir den Weg für ein besseres und kompetitiveres Landwirtschaftssystem begonnen.
                </span>
              </div>  
              <img src={gurkenflieger} alt="Gurkenflieger Logo" className="mx-auto sm:w-80 sm:h-80 rounded-md shadow-lg" />
            </div>
          </div>
          <div className="mt-8 block text-left mx-20">
            <h1 className="p-4 text-2xl text-bold"><strong>Unsere Lösung</strong></h1>
            <div className="flex justify-center">
              <div className="text-left text-gray-700 text-md sm:text-lg p-4">
                <span className=" font-medium">
                  Mit unserem Projekt versuchen wir deutsche Landwirde mithilfe von modernen Robotern zu entlasten und unfaire und harte saisonarbeit beenden.
                  Mit einem Team bestehend aus 5 Personen haben wir den Weg für ein besseres und kompetitiveres Landwirtschaftssystem begonnen.
                </span>
              </div>  
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Warum unser Produkt?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Effiziente Planung"
              text="Erntehelfer und Arbeitsabläufe perfekt organisiert – ohne Chaos."
            />
            <Feature
              title="Mobile Optimiert"
              text="Volle Nutzung auf Smartphone, Tablet oder Desktop."
            />
            <Feature
              title="Schnell & Intuitiv"
              text="Kein unnötiger Ballast – klare Bedienung, klare Abläufe."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">Bereit loszulegen?</h2>
        <p className="mt-4 text-gray-600">
          Erfahre mehr über den Gurkenflieger und wie er dein Projekt verbessert.
        </p>

        <button
          className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white 
                     rounded-xl text-lg font-medium transition-all shadow-md"
        >
          Mehr erfahren
        </button>
      </section>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
