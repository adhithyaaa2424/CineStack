import HeroBanner from "../components/home/HeroBanner";
import MovieSection from "../components/home/MovieSection";


function Home(){
    return (
    <div>
        <HeroBanner/>

        <MovieSection  title="Trending Movies"/>
        <MovieSection title="Popular Movies"/>
        <MovieSection title="Top Rated Movies"/>
        <MovieSection title="Web Series"/>
        <MovieSection title="Horror Movies"/>
    </div>
    )
}


export default Home;