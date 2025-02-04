import { Link } from 'react-router-dom';
import MovieRow from '../components/MovieRow';
import CSharp from 'programming-languages-logos/src/csharp/csharp.png';
import Javascript from 'programming-languages-logos/src/javascript/javascript.png';
import Java from 'programming-languages-logos/src/java/java.png';
import Python from 'programming-languages-logos/src/python/python.png'
import HTML from 'programming-languages-logos/src/html/html.png'
import CSS from 'programming-languages-logos/src/css/css.png'
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
        { id: 1, title: "C#", poster: CSharp },
        { id: 2, title: "Javascript", poster: Javascript },
        { id: 3, title: "React", poster: PosterImage },
        { id: 4, title: "Java", poster: Java },
        { id: 5, title: "Python", poster: Python },
        { id: 6, title: "HTML", poster: HTML },
        { id: 7, title: "CSS", poster: CSS },
        { id: 8, title: "GDScript", poster: PosterImage },
        { id: 9, title: "C++", poster: PosterImage },
        { id: 10, title: "HLSL", poster: PosterImage },
      ];

    return(
        <>
            <div>
                <Link to="/Home" style={styles.linker}>Home</Link>
                <h2>About Me</h2>
                <p>My name is <b>William Busch</b></p>
                <p>I am from ___</p>
                <p>I have a passion for ___</p>
                <p>
                    I enjoy filmmaking, <b>European</b> art, Game Design <br></br>
                    I have a particular interest in silent films <br></br>
                    My passion has always been for <b>cinematography</b> <br></br>
                    I enjoy good art and good design which has led me here <br></br>
                    I also have an interest in procedural generation and maps 
                </p>
                <h2>Languages</h2>
                <MovieRow movies={customMovies}/>
                <h2>Programs</h2>
                <ul style={styles.list}>
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
                    <li>Arc GIS</li>
                    <li>AWS</li>
                    <li>Firebase</li>
                    <li>Exxcel</li>
                    <li>Microsoft Office</li>
                    <li>QT Designer</li>
                </ul>
                <h2>API'S</h2>
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