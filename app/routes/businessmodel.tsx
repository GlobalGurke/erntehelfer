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
                            Reliable harvest without seasonal workers 
                        </p>
                           <p className="text-gray-600 text-sm mt-2">
                            Lower production cost vs rising wages 
                        </p>   <p className="text-gray-600 text-sm mt-2">
                            Eliminates inhumane labor 
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Secures Existence
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Cost competitiveness
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            AI-guided selective picking
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Yearly constant planning is possible
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
                <div className="flex justify-between">
                    <section className="border rounded-xl p-4 w-full">
                        <h2 className="font-semibold text-lg">Revenue Streams</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Robotics-as-a-Service (monthly fee)
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Data & analytics services
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Maintenance contracts
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                           Hardware sales
                        </p>
                    </section>

                    <section className="border rounded-xl p-4 w-full ml-6">
                        <h2 className="font-semibold text-lg">Cost Structure</h2>
                        <p className="text-gray-600 text-sm mt-2">
                          Field operations & testing 
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          High initial development costs 
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Software development & cloud services
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Maintenance & support staff
                        </p>
                    </section>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <section className="border rounded-xl p-4 md:col-span-2">
                        <h2 className="font-semibold text-lg">Key Activities</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Robot development and manufacturing
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Field testing
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Lobbying for Smart-Farming subsidies
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Software updates
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            Worker reskilling & placement
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            AI Data monetization
                        </p>
                    </section>

                    <section className="border rounded-xl p-4 md:col-span-2">
                        <h2 className="font-semibold text-lg">Key Resources</h2>
                        <p className="text-gray-600 text-sm mt-2">
                           Robotics and AI
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                           Field Data set 
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                           <strong>Intellectual Property (IP)</strong> Proprietary AI / Vision system to solve the "Occlusion Gap" 
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                           <strong>Human Capital</strong> Robotics / AI ENgineers (Programming competence) and business experts (Marketing competence)
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                           <strong>Physics Assets:</strong> A reliable fleet of autonomous harvesting robots, maintenance parts
                        </p>
                    </section>

                </div>
                <section className="border rounded-xl p-4 md:col-span-2">
                    <h2 className="font-semibold text-lg">Key Partners</h2>
                    <p className="text-gray-600 text-sm mt-2">
                        Roboics and AI Team (External / Consultants)
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Agricultural machinery suppliers
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Hardware machinery partners
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Agri Economics Research Center
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Larbour Unions (IG Bau)
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Food Processors / Buyers
                    </p>
                </section>
            </div>
        </div>
    );
}