import { Link } from 'react-router-dom';
import InteractionBar from '../components/InteractionBar';
import BottomBar from '../components/BottomBar';
import React from 'react';
import MovieRow from '../components/MovieRow';
import TopBar from '../components/TopBar';
import Bar from '../components/Bar';
import '../Global.module.css'

import AreusWoman from '../assets/AreusWoman.png'
import AreusMan from '../assets/AreusMan.png'
import AreusBook from '../assets/AreusBook.jpg'
import Gate from '../components/Gate';

export default function () {
    
    const styles = {
        article: {
            // width: '50vw',
            // height: '100vh',
            // backgroundColor: 'slategray',
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // display: 'flex', // Center content
            // placeItems: 'center',
            minWidth: '700px',
            // justifyContent: 'center', // Center horizontally
            // alignItems: 'center', // Center vertically
        },
        div: {
            margin: '0px',
            padding: '0px',
        }, 
        
    };
    
    return(
        <div style={styles.div}>
            <title>Areus</title>
            <style>
            {`
            img {
                filter: grayscale(1);
                display: block;
                width: 100%;
                height: auto;
                border: 1px solid #000000;
            }

            .borderless-image {
                border: none;
            }

            .indented-image {
                filter: grayscale(1);
                display: block;
                width: 75%;
                height: auto;
                margin: auto;
                border: 1px solid #000000;
            }

            .logo {
                filter: none;
                display: block;
                width: 25px;
                height: 25px;
                border: none;
            }

            ::selection {
                background-color: rgb(255, 0, 0);
            }

            .banner {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .article-banner {
                margin: auto;
                width: 25%;
                display: flex;
                justify-content: space-around;
            }

            body {
                margin: 0px;
            }

            article {
                width: 35%;
                margin: auto;
                justify-content: center;
            }

            h2 {
                text-align: center;
            }

            h3 {
                text-align: center;
                font-size: 16px;
            }

            a {
                text-decoration: none;
                color: red;
            }

            a::selection {
                color: white;
                background-color: red;
            }

            h4 {
                display: inline-block;
                text-align: center;
                font-size: 14px;
            }

            p {
                text-align: justify;
            }

            .Modal-Window {
                z-index: 5;
                position: fixed;
                margin: auto;
                justify-self: center;
                background-color: white;
                border: 2px solid #000000;
                display: block;
                padding: 20px;
                padding-left: 50px;
                padding-right: 50px;
                max-width: 40%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: xx-large;
            }

            .full-page-blur {
                position: fixed;
                width: 100%;
                height: 100%;
                z-index: 4;
                background-color: rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(5px);
            }
            `}
            </style>
            
            <Gate />
            <article style={styles.article}>
                {/* <TopBar /> */}
                <Bar/>
                <div className="banner">
                    
                    <img src="./Group 271.png" alt="Logo" className="logo" />
                    <h1>The Unknown Press</h1>
                    <img src="./account_image.png" alt="Account" className="logo" />
                </div>
                <h2>Where did the dragons go?</h2>
                <p>
                Masaaki Yuasa is one of the most distinctive and innovative directors in Japanese animation, known for his rejection of conventional industry norms in favor of an expressive, fluid, and highly subjective visual style. His works challenge the dominant aesthetic of mainstream anime, instead prioritizing emotional intensity and formal experimentation. Through the lens of auteur theory, Yuasa’s films can be understood as an extension of his artistic philosophy—one that embraces movement, emotional subjectivity, and stylistic rebellion. This paper argues that Yuasa’s unique approach to animation, characterized by unrestrained visual expression, emotionally driven storytelling, and a fluid relationship between reality and perception, cements his status as an auteur. 

                </p>
                <img src={"/BookCover.jpg"} alt="Image" />
                <h2>Yuasa’s Auteur Identity</h2>
                <p>
                The auteur theory, as outlined by Andrew Sarris (1963), argues that a director’s personal vision is central to a film’s artistic identity, even in a highly collaborative medium like cinema. While animation often involves large teams, Yuasa’s authorial influence remains evident through his consistent use of exaggerated movement, emotionally charged narratives, and experimental visual design. His films do not merely tell stories—they embody a philosophy of artistic and emotional liberation, using animation’s limitless potential to visualize subjective perception. By deconstructing Yuasa’s approach to subjectivity, movement, and collaboration, we can see how his works resist dominant animation conventions while expressing a clear authorial vision.

                </p>
                <img src={AreusMan} alt="Eyes" className="borderless-image" />
                <p>
                Masaaki Yuasa has made many films over his career that vary wildly in tone from film to film, but I want to highlight two of his most oppositional works, The Night Is Short, Walk On Girl (2017) and Devilman Crybaby (2018). These two films best exemplify the core stylistic traits that persist across his range of works. The Night Is Short, Walk On Girl embodies the celebratory, free-spirited side of Yuasa’s filmmaking, following a surreal odyssey of youthful adventure where time and reality morph around the characters’ emotions. In contrast, Devilman Crybaby embraces Yuasa’s darker tendencies, depicting a world of hedonism, violence, and existential despair. While one revels in the whimsical energy of fleeting romance, the other descends into tragic, apocalyptic horror—yet both share the same unrestrained animation, fluidity of form, and thematic preoccupation with desire, passion, fate, and transformation.  
                </p>
                <img src={AreusWoman} alt="Mask group" className="borderless-image" />
                <h3>
                    Captain Nobody - 2024
                </h3>
                <h3>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio" target="_blank" rel="noopener noreferrer">
                    @AsyncGenius
                </a>
                </h3>
                <h2>
                <Link to="/Home">Home</Link>
                </h2>
                <h2>Other Articles</h2>
                <MovieRow />
                
                <InteractionBar />
            </article>

            <BottomBar/>

        </div>
    )
}