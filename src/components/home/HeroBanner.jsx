function HeroBanner(){
    return (
        <section className="min-h-screen bg-black text-white flex items-center ">
            <div className="max-w-3xl px-6 space-y-6">
                
                <h1 className="text-6xl font-bold ">
                    Dhurandaar 2
                </h1>

                <p className="max-w-2xl leading-relaxed">
                    An elite spy returns for one final mission to stop a global cyber attack.
                </p>

                <p>⭐ 8.6   •   150 min   •   2026</p>

                <div className="flex gap-4">

                    <button className="bg-red-600 px-5 py-2 rounded">
                        ▶️ Watch Trailer
                    </button>

                    <button className="border border-white px-5 py-2 rounded">
                        Add to Watchlist
                    </button>
                </div>
            </div>
        </section>
    )
}


export default HeroBanner;