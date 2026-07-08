import HeroBanner from "../components/home/HeroBanner";
import MovieSection from "../components/home/MovieSection";


function Home(){
    const title = ['Trending Movies','Popular Movies','Top Rated Movies','Web Series','Horror Movies']
    return (
    <div>
        <HeroBanner/>

         {
            title.map((item)=>(
                <MovieSection 
                key={item}
                title={item}
                />
            ))
         }
        
    </div>
    )
}


export default Home;