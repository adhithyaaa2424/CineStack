import MovieCard from "./MovieCard";


function MovieRow(){
    return (
        <div className="flex gap-4">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>


        </div>
    )
}

export default MovieRow;