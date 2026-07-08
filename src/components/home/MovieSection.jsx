import SectionHeading from "./SectionHeading";
import MovieCard from "./MovieCard";
import MovieRow from "./MovieRow";

function MovieSection({title}){
    return (
        <section className="px-6 py-8">

         <SectionHeading title={title}/>

            <MovieRow/>
            
        </section>
    )
}


export default MovieSection;