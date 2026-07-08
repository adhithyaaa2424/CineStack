import SectionHeading from "./SectionHeading";


function MovieSection({title}){
    return (
        <section className="px-6 py-8">
            <SectionHeading title={title}/>
            <div className="flex gap-4">

                <div className="w-48 h-72 bg-zinc-800 rounded-lg flex items-center justify-center">
                    Movie Box
                </div>

                <div className="w-48 h-72 bg-zinc-800 rounded-lg flex items-center justify-center">
                    Movie Box
                </div>

                <div className="w-48 h-72 bg-zinc-800 rounded-lg flex items-center justify-center">
                    Movie Box
                </div>

                <div className="w-48 h-72 bg-zinc-800 rounded-lg flex items-center justify-center">
                    Movie Box
                </div>

                <div className="w-48 h-72 bg-zinc-800 rounded-lg flex items-center justify-center">
                    Movie Box
                </div>

            </div>
        </section>
    )
}


export default MovieSection;