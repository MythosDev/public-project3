import TopBar from "../components/TopBar";
import MovieRow from "../components/MovieRow";
import ReactPlayer from 'react-player'


export default function () {
    return (
        <>
            <TopBar/>
            <ReactPlayer url='https://www.youtube.com/watch?v=YRvu6e9Utd4&ab_channel=FilmCourage' />
            <ReactPlayer url='/Made in the Image of GodNo child should be aborted.mp4' />
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
        </>
    )
}

// load from file/csv/sql

// Movie File
// Name, Cast, Image, Release Date, Country, Language, Studio, Length, Rating, Internal Rating, Content labels, Tags, Genres, Collection/file src