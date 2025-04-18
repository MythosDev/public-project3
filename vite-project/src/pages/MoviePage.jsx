import TopBar from "../components/TopBar";
import MovieRow from "../components/MovieRow";
import ReactPlayer from 'react-player'


export default function () {

    const Education = [
        {id: 1, title: "Active", poster: "/Poster/active.jpg"},
        {id: 2, title: "Nature", poster: "/Poster/nature.jpg"}, 
        {id: 3, title: "Science", poster: "/Poster/science.jpg"},
        {id: 4, title: "History", poster: "/Poster/history.jpg"},
    ];

    const Art = [
        {id: 5, title: "Music", poster: "/Poster/music.jpg"},
        {id: 6, title: "Cooking", poster: "/Poster/cooking.jpg"},
        {id: 7, title: "Math", poster: "/Poster/math.jpg"},
        {id: 8, title: "Language", poster: "/Poster/art.jpg"},
    ];

    const Technique = [
        {id: 1, title: "Idle", poster: "/Poster/idle.jpg"},
        {id: 2, title: "Claymation", poster: "/Poster/claymation.jpg"},
        {id: 3, title: "Puppets", poster: "/Poster/puppets.jpg"},
        {id: 4, title: "Classics", poster: "/Poster/classic.jpg"},
    ];

    const Theology = [
        {id: 10, title: "Biblical", poster: "/Poster/biblical.jpg"},
        {id: 11, title: "Christian", poster: "/Poster/christian.jpg"},
        {id: 12, title: "Mythology", poster: "/Poster/mythology.jpg"},
        {id: 13, title: "Fairy Tales", poster: "/Poster/fairytale.jpg"},
    ];

    const Fun = [
        {id: 15, title: "Action", poster: "/Poster/action.jpg"},
        {id: 16, title: "Spy Kids", poster: "/Poster/spy.jpg"},
        {id: 17, title: "Adventure World", poster: "/Poster/adventure.jpg"},
        {id: 18, title: "Comedy", poster: "/Poster/comedy.jpg"},
    ];

    return (
        <>
            <div className="w-[1080px] justify-center mx-auto">
            <TopBar/>
            <ReactPlayer url='https://www.youtube.com/watch?v=YRvu6e9Utd4&ab_channel=FilmCourage' controls/>
            <ReactPlayer url='/cutebaby.mp4' controls/>
            <h2 className='font-bold text-2xl'>Kids</h2>

            <MovieRow movies={Education}/>
            <MovieRow movies={Art}/>
            <MovieRow movies={Technique}/>
            <MovieRow movies={Theology}/>
            <MovieRow movies={Fun}/>

            <h2>Recents</h2>
            <MovieRow />
            <h2>Watchlist</h2>
            <MovieRow />
            <h2>Animation</h2>
            <MovieRow />
            <h2>Trinity</h2>
            <h2>Frontier</h2>
            <h2>York</h2>
            <h2>Digitas</h2>
            <h2>Avalon</h2>
            <h2>Roma Episodes</h2>
            <h2>TV Shows</h2>
            <h2>Action</h2>
            <h2>Romance</h2>
            <h2>Comedy</h2>
            <h2>Romcoms</h2>
            <h2>Horror</h2>
            <h2>Westerns</h2>
            <h2>Adventure</h2>
            <h2>Fantasy</h2>
            <h2>Sci Fi</h2>
            <h2>Stop motion</h2>
            </div>
        </>
    )
}

// load from file/csv/sql

// Movie File
// Name, Cast, Image, Release Date, Country, Language, Studio, Length, Rating, Internal Rating, Content labels, Tags, Genres, Collection/file src