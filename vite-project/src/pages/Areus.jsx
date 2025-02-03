import { Link } from 'react-router-dom';
import InteractionBar from '../components/InteractionBar';
import BottomBar from '../components/BottomBar';
import React from 'react';
import MovieRow from '../components/MovieRow';
import TopBar from '../components/TopBar';
import Bar from '../components/Bar';

export default function () {
    return(
        <>
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
        
            <article>
                {/* <TopBar /> */}
                <Bar/>
                <div className="banner">
                    
                    <img src="./Group 271.png" alt="Logo" className="logo" />
                    <h1>Areus</h1>
                    <img src="./account_image.png" alt="Account" className="logo" />
                </div>
                <h2>Where did the dragons go?</h2>
                <p>
                OnlyFans is a pimp ring, where older women are used to usher in newcomers, receiving a dividend from their referral links, if successful they gain a portion of the profits. OnlyFans girls are not innocent.
                This is the same argument with drug dealing, where the popular position is to advocate for criminalizing the dealers and not the consumers. I believe for OnlyFans everyone is responsible, even the models punishing them sets a precedent.
                Of course there are those who have been groomed. I consider every person voluntarily in this field to be retarded.
                On a societal level, we need to fix this; on a personal level, they need to take responsibility. People need to make the right decision. We need a strong deterrent.
                Muting the natural consequences only serves to prop up the industry. Held in overt sexual slavery, isolated and abused into the industry, preyed on by predators into the industry, groomed by society at a young age, soulless psychopaths looking for profit.
                The psychopaths advertise the industry because it makes them money and they help isolate the victims. They could have been victims at one point but are now victimizers.
                </p>
                <img src="./GevZQJHXYAAsjq7.jpg" alt="Image" />
                <p>
                You can never reform from being a porn distributor, You can never reform from being an enabler of exploitation, only victims can truly be saved. There are a plethora of girls that were coerced into the industry at a young age, either via economic means, emotional abuse, grooming, etc.
                They don't deserve to be shunned for being born into it. They offer a ___ perspective that is needed. I doubt the others that reform into ____.
                </p>
                <img src="./eyes.png" alt="Eyes" className="borderless-image" />
                <h2>Why do they care about your data?</h2>
                <p>
                Pornhub releases data yearly going over a plethora of user statistics, most common categories, most common pornstars, etc. But, have you ever wondered why a company that allows child pornography to slip through their moderation would be so focused on statistics?
                Going so far as to publicly categorize it all for the world to see? Organized into neat infographics that could be shared anywhere? Me neither.
                </p>
                <img src="./Mask group (3).png" alt="Mask group" className="borderless-image" />
                <h3>
                    William Busch - 2024
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

        </>
    )
}