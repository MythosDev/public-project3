import { Link } from 'react-router-dom';
import MovieRow from '../components/MovieRow';
import PosterImage from '../assets/202648-ki-or-breathing-0-1000-0-1500-crop.jpg';

export default function () {

    const styles = {
        list: {
            textAlign: "left",
            marginLeft: "100px"
        },

        linker: {
            fontSize: "36px",
            fontWeight: "800"
        }
    }

    const customMovies = [
        { id: 1, title: "The Matrix", poster: PosterImage },
        { id: 2, title: "Avatar", poster: PosterImage },
        { id: 3, title: "The Avengers", poster: PosterImage },
        { id: 4, title: "Titanic", poster: PosterImage },
        { id: 5, title: "Spider-Man", poster: PosterImage },
      ];

    return(
        <>
            <div>
                <h2>About Me</h2>
                <p>My name is William Busch</p>
                <p>I am from ___</p>
                <p>I have a passion for ___</p>
                <p>I enjoy filmmaking, European art, Game Design</p>
                <p>
                    I enjoy filmmaking, <b>European</b> art, Game Design <br></br>
                    I have a particular interest in silent films <br></br>
                    My passion has always been for <b>cinematography</b> <br></br>
                    I enjoy good art and good design which has led me here <br></br>
                    I also have an interest in procedural generation and maps 
                </p>
                <Link to="/Home" style={styles.linker}>Home</Link>
                <h2>Skills</h2>
                <MovieRow movies={customMovies}/>
                <ul style={styles.list}>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>GDScript</li>
                    <li>Unity</li>
                    <li>Godot</li>
                    <li>Blender</li>
                    <li>Photopea</li>
                    <li>Photoshop</li>
                    <li>Krita</li>
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Davinci Resolve</li>
                    <li>Davinci Fusion</li>
                    <li>Premiere Pro</li>
                    <li>After Effects</li>
                    <li>Adobe Audition</li>
                    <li>Unreal Engine</li>
                </ul>
                <h2>Learning</h2>
                <ul style={styles.list}>
                    <li>Nuke</li>
                    <li>Cinema 4D</li>
                    <li>Houdini</li>
                    <li>Susbtance Painter</li>
                </ul>
            </div>

        </>
    )
}