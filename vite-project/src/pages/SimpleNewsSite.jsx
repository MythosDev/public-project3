import React from "react";
import Img from "/Cover_Art.png";

const Page = () => {
    return (
        <div className="page">
            <div className="topbar">
                <h1>Title</h1>
            </div>
            <menu>
                <h2>home</h2>
                <h2>news</h2>
            </menu>
            <div className="mainbody">
                <article>
                    <h1>Title</h1>
                    <h2>Subtitle</h2>
                    <div className="author">
                        <div className="icon"></div>
                        <div className="names">
                            <p>Name</p>
                            <p>Date + length</p>
                        </div>
                        <div className="linkrow">
                            <div className="link"></div>
                            <div className="link"></div>
                            <div className="link"></div>
                        </div>
                    </div>
                    <div>
                        <p>Divider</p>
                    </div>
                    <img src="" alt="" />
                    <p>
                        The apartment | Roommates
                        5 seasons, sitcom, 
                        A girl gets kicked out of her friend's group home and has to stay with her other friend and four roommates in a small apartment.
                        The night man. Room is off limits, pays rent and utilities. Manager, doesn't help them, threatens to evict them when they don't pay rent. Immigrant neighbors, makes noises. Business strive, nerd guy, dirt man. Weird girl, mean girl, MC straight girl, smart girl. The characters have various romantic interests but they are not so easily disposed. They all work in a similar place. 

                        They finally meet the night man and he's really nice. She get a little bit of a crush. Later seasons he becomes a more prominent character. 


                        Family comedy 
                        Someone gets arrested for business fraud
                        They live beside each other

                        Scene: Man sends over drink to flirt → she is surrounded by drinks already → bunch of guys crowd him (night is short inspired)
                    </p>
                    <img src={Img} alt="" />
                    <p>
                        The apartment | Roommates
                        5 seasons, sitcom, 
                        A girl gets kicked out of her friend's group home and has to stay with her other friend and four roommates in a small apartment.
                        The night man. Room is off limits, pays rent and utilities. Manager, doesn't help them, threatens to evict them when they don't pay rent. Immigrant neighbors, makes noises. Business strive, nerd guy, dirt man. Weird girl, mean girl, MC straight girl, smart girl. The characters have various romantic interests but they are not so easily disposed. They all work in a similar place. 

                        They finally meet the night man and he's really nice. She get a little bit of a crush. Later seasons he becomes a more prominent character. 


                        Family comedy 
                        Someone gets arrested for business fraud
                        They live beside each other

                        Scene: Man sends over drink to flirt → she is surrounded by drinks already → bunch of guys crowd him (night is short inspired)
                    </p>
                    <div className="comment"></div>
                </article>
            </div>
            <div className="recommendations">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="bottombar">
                <p>@williamBusch</p>
            </div>


            <style jsx>{`
                /* Override root styles */
                :global(html) {
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                }

                :global(body) {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                }

                :global(body) {
                    margin: 0;
                    display: block;
                    min-width: auto;
                    min-height: auto;
                    background-color: #f0f0f0;
                  }
          
                  :global(#root) {
                    max-width: 100%;
                    padding: 1rem;
                  }
          
                  :global(:root) {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    color: black;
                  }

                

                h1 {
                    font-weight: bold;
                    font-size: 36px;
                }

                h2 {
                    font-weight: bold;
                    font-size: 24px;
                }

                div {
                    display flex;
                    justify-content: center;
                }

                article {
                    min-width: 250px;
                    max-width: 500px;
                    
                }

                .author {
                    display: flex;
                    margin-right: auto;
                    // justify-content: space-around;
                    gap: 5px;
                    align-items: center;
                }

                .linkrow {
                    margin-left: auto;
                    justify-content: left;
                    display: flex;
                    gap: 5px;
                }

                .names {
                    display: flex;
                    flex-direction: column;
                }

                .icon {
                    border-radius: 50px;
                    background-color: red;
                    height: 50px;
                    width: 50px;
                }

                .link {
                    border-radius: 50px;
                    background-color: red;
                    height: 40px;
                    width: 40px;
                }

                .img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .mainbody {
                    display: flex;
                    justify-content: center;
                }

                .page {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    gap: 10px;
                    font-family: crimson;
                }


                .topbar {
                    display: inline-flex;
                    justify-content: space-around;
                }

                .bottombar {
                    display: inline-flex;
                    justify-content: center;
                    gap: 10px;
                }

                menu {
                    display: inline-flex;
                    justify-content: center;
                    gap: 10px;
                }

                .comment {
                    width: 100%;
                    height: 250px;
                    background-color: red;
                }

                .recommendations {
                    display: inline-flex;
                    justify-content: center;
                    gap: 10px;
                }

                .card {
                    width: 150px;
                    height: 100px;
                    background-color: red;
                }

                // Top Bar
                // Author Card
                // Recommenation Bar
                // Circle Link
                // Sticky Corner
                // Comments

            `}</style>
        </div>

    );

};

export default Page;