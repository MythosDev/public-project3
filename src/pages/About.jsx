import { Link } from 'react-router-dom';

export default function () {
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
                <Link to="/Home">Home</Link>
            </div>

        </>
    )
}