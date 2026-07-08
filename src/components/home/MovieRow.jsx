import MovieCard from "./MovieCard";
import rrrposter from '../../assets/rrrposter.jpg'
import kgfposter from '../../assets/kgfposter.jpg'
import masterposter from '../../assets/masterposter.jpg'
import bahubaliposter from '../../assets/bahubaliposter.jpg'
import pushpaposter from '../../assets/pushpaposter.jpg'
import jailerposter from '../../assets/jailerposter.jpg'
import toxicposter from '../../assets/toxicposter.jpg'


function MovieRow(){

const movies = [ {
               
               id: 1,
               poster:rrrposter,
               title: "RRR",
               rating:"⭐ 8.3",
               year:2021

           },
           {
               id: 2,
               poster:kgfposter,
               title: "KGF Chapter-1",
               rating:"⭐ 9.3",
               year:2022},
            {
               id: 3,
               poster:masterposter,
               title: "Master",
               rating:"⭐ 9.0",
               year:2021
               },
               {
                id: 4,
                poster: bahubaliposter,
               title: "Bhahubali 1",
               rating:"⭐ 9.3",
               year:2016
               },
               {
                id: 5,
                poster: pushpaposter,
               title: "Pusha The Rise",
               rating:"⭐ 8.0",
               year:2022
               },
               {
                id: 6,
                poster:jailerposter,
               title: "Jailer",
               rating:"⭐ 8.0",
               year:2023
               },
               {
                id: 7,
                poster:toxicposter,
               title: "Toxic",
               rating:"⭐ 9.3",
               year:2026
               }]

    return (
        <div className="flex gap-4 overflow-x-auto pb-2">
            {
             
             movies.map((movie)=>(
                <MovieCard 
                   key={movie.id}
                   movie={movie}
                />
             ))

            }


        </div>
    )
}

export default MovieRow;