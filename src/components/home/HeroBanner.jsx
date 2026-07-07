function HeroBanner(){
    return (
        <section className="min-h-screen bg-black text-white flex items-center ">
            <div className="max-w-3xl px-6">
                <h1>Joseph Vijay</h1>
                <p>Commercial movie</p>
                <div className="flex gap-4">
                    <button className="bg-red-600 px-5 py-2 rounded">
                        Watch Trailer
                    </button>
                    
                    <button className="border border-white px-5 py-2 rounded">
                        Watch Movie
                    </button>
                </div>
            </div>
        </section>
    )
}


export default HeroBanner;