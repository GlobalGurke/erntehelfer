export default function BusinessModel() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 space-y-8">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold">Business Model</h1>
                    <p className="text-gray-500">Kurz, klar, ohne Bullshit.</p>
                </div>

                {/* Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <section className="border rounded-xl p-4 h-full">
                        <h2 className="font-semibold text-lg">Value Proposition</h2>
                         <p className="text-gray-600 text-sm mt-2">
                        
                        </p>
                    </section>
                    <div className="h-full gap-10">
                    <div className="border rounded-xl p-4 mb-3">
                        <h2 className="font-semibold text-lg">Customer Relationship</h2>
                        <p className="text-gray-600 text-sm mt-2">
                        Personalized Consulting, Dedicated maintenance service and continious feedback loop.
                        </p>
                    </div>
                     <div className="border rounded-xl p-4">
                        <h2 className="font-semibold text-lg">Channels</h2>
                        <p className="text-gray-600 text-sm mt-2">
                        Direct Sales/Service Teams
                        </p>
                         <p className="text-gray-600 text-sm mt-2">
                        Agricultural Trade Fairs
                        </p>
                         <p className="text-gray-600 text-sm mt-2">
                        Partnerships with OEMs/Dealers
                        </p>
                         <p className="text-gray-600 text-sm mt-2">
                        Local Goverment Representatives
                        </p>
                    </div>

                    </div>
                    <section className="border rounded-xl p-4">
                        <h2 className="font-semibold text-lg">Customer Segments</h2>
                           <p className="text-gray-600 text-sm mt-2">
                            <strong>Primary: </strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Cucumber farmers in Niederbayern and Bavaria facing severe labor and cost problems.
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            <strong>Secondary: </strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                           The regional processing industry (Konservenindustrie) seeking a stable, secure supply chain.
                        </p>
                    </section>
                </div>
                <div>
                    <section className="border rounded-xl p-4">
                        <h2 className="font-semibold text-lg">Revenue Streams</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Wie fließt Geld rein? Abo, einmalig, B2B Deals?
                        </p>
                    </section>

                    <section className="border rounded-xl p-4">
                        <h2 className="font-semibold text-lg">Cost Structure</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Fixkosten, variable Kosten, alles was dich bluten lässt.
                        </p>
                    </section>

                    <section className="border rounded-xl p-4 md:col-span-2">
                        <h2 className="font-semibold text-lg">Key Activities</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Wofür bist du täglich am Arbeiten? Welche Prozesse treiben Wert?
                        </p>
                    </section>

                    <section className="border rounded-xl p-4 md:col-span-2">
                        <h2 className="font-semibold text-lg">Key Resources</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Menschen, Know-how, Maschinen, Software – was brauchst du wirklich?
                        </p>
                    </section>

                    <section className="border rounded-xl p-4 md:col-span-2">
                        <h2 className="font-semibold text-lg">Channels</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Wie erreichst du Kunden? Wo kaufen sie?
                        </p>
                    </section>

                    <section className="border rounded-xl p-4 md:col-span-2">
                        <h2 className="font-semibold text-lg">Key Partners</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Wen brauchst du außenrum? Lieferanten, Plattformen, Kooperationen?
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}