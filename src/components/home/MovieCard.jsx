function MovieCard({movie}){
    return (
        <div className="w-48 h-72 bg-zinc-800 rounded-lg flex flex-col cursor-pointer transition duration-300 hover:scale-105 overflow-hidden flex-shrink-0">

           <div className="h-64 bg-zinc-700 flex items-center justify-center">
            <img 
               src={movie.poster}
               alt={movie.title}
               className="w-full h-55 object-cover"


  
/>
           </div>

           <div className="p-3">

            <h3 className="text-white font-semibold">
                {movie.title}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
                {movie.rating} • {movie.year}
            </p>

           </div>
        </div>
    )
}




export default MovieCard;