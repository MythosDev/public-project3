import { Link } from 'react-router-dom';
import MovieRow from '../components/MovieRow';
import demoPic from '../assets/mypic.png';
import '../Global.module.css'

import CSharp from 'programming-languages-logos/src/csharp/csharp.png';
import Javascript from 'programming-languages-logos/src/javascript/javascript.png';
import Java from 'programming-languages-logos/src/java/java.png';
import Python from 'programming-languages-logos/src/python/python.png'
import HTML from 'programming-languages-logos/src/html/html.png'
import CSS from 'programming-languages-logos/src/css/css.png'
import PosterImage from '../assets/202648-ki-or-breathing-0-1000-0-1500-crop.jpg';
import Cplusplus from '../assets/c++.png';
import ReactIcon from '../assets/react.png';
import GodotIcon from '../assets/godot_icon.svg'
import HLSLIcon from '../assets/hlsl.png'
import ParallaxBackground from '../components/ParallaxBackground';
import BlackEagleIcon from '../assets/BlackEagleIcon.png'

export default function () {

    const styles = {
        list: {
            textAlign: "left",
            marginLeft: "100px"
        },

        linker: {
            fontSize: "36px",
            fontWeight: "800"
        },

        imageContainer: {
            width: "100%", // Full width
            height: '500px', // ADJUST FOR IMAGE SHOWN
            maxWidth: '500px',
            overflow: "hidden", // Ensures cropping of the image
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: '0 auto',
        },
        img: {
            width: "100%", // Make the image scale to fill width
            height: "100%", // Ensures it fills the container height
            objectFit: "cover", // Ensures it maintains aspect ratio while cropping top and bottom
            objectPosition: 'center center', //ADJUST FOR WHERE IMAGE GETS CROPPED
        
        },
    }

    const customMovies1 = [
        { id: 1, title: "C#", poster: CSharp },
        { id: 2, title: "Javascript", poster: Javascript },
        { id: 3, title: "React", poster: ReactIcon },
        { id: 4, title: "Java", poster: Java },
        { id: 5, title: "Python", poster: Python },
    ];
    const customMovies2 = [
        { id: 6, title: "HTML", poster: HTML },
        { id: 7, title: "CSS", poster: CSS },
        { id: 8, title: "GDScript", poster: GodotIcon },
        { id: 9, title: "C++", poster: Cplusplus },
        { id: 10, title: "HLSL", poster: HLSLIcon },
      ];

    return(
        <>
            <div>
                {/* <ParallaxBackground /> */}
                <Link to="/Home" style={styles.linker}>Home</Link>
                <br />
                <br />
                <div style={styles.imageContainer}>
                    <img src={demoPic} alt="" style={styles.img}/>
                </div>
                <h2>About Me</h2>
                <p>My name is <b>Nobody</b></p>
                <p>I am from <b>somewhere</b></p>
                <div style={{width: '500px', margin: 'auto', textAlign: 'justify'}}>
                    <p>
                        I have always had a passion for art.
                        Designing websites and posters is something I like to do in my free time.
                        The pyschology of consumer descisions fascinates me.
                        As does the technology behind products.
                    </p>
                    <p>
                        I have a passion for maps. 
                        Which has led me to procedural generation.
                        I enjoy creating simulations.
                        Creating life through algorithms is one of my joys in life.
                        Not as much of a fan of AI though.
                    </p>
                    <p>
                        I enjoy filmmaking, particularly cinematography and want to work on short films in the future.
                        My fascination is mostly concentrated to fantasy films and silent films.
                        Creating beautiful images that transport people to different worlds and capture memories is my goal in life.
                    </p>
                    <p>
                        Video Games are also a passion of mine. Although not playing them. I enjoy Making them.
                        I have been designing and creating video games for 7 years and have no plans to stop.
                        My focus is primarily on coop games and procedurally generated games.
                        The joy from playing games with your friends is something that is often forgotten in the industry today, 
                        and I believe is something that should be brought back.
                    </p>
                </div>
                <h2>Languages</h2>
                <MovieRow movies={customMovies1}/>
                <MovieRow movies={customMovies2}/>
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
                    <li>Speak French/English</li>
                    <li>American/Canadian Citizenship</li>
                </ul>
                <h2>API'S</h2>
                <p>
                    tailwind, scss, vite, typescript, docker, postgres, mysql, sqllite, <br />
                    redis, stripe, graphql, threejs, NodeJS, Neovim, firebase, flutter, <br />
                    react native, Julia, Linux, Git, OpenGL, Vulkan, 
                </p>
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