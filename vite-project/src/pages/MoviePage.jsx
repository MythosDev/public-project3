import TopBar from "../components/TopBar";
import MovieRow from "../components/MovieRow";
import ReactPlayer from 'react-player'


export default function () {
    return (
        <>
            <TopBar/>
            <ReactPlayer url='https://www.youtube.com/watch?v=YRvu6e9Utd4&ab_channel=FilmCourage' />
            <MovieRow />
            <MovieRow />
            <MovieRow />
        </>
    )
}