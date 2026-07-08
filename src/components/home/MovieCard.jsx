function MovieCard(){
    return (
        <div className="w-48 h-72 bg-zinc-800 rounded-lg flex items-center justify-center">
           <div className="h-64 bg-zinc-700 flex items-center justify-center">
            Poster
           </div>
           <div className="p-3">
               <h3 className="text-white font-semibold">
                Toxic
               </h3>
               <p className="text-sm text-gray-400 mt-1">
                ⭐ 7.8 • 2026
               </p>
           </div>
        </div>
    )
}




export default MovieCard;