import { Link } from 'react-router-dom';
import '../index.css'

export default function () {

    return(
        <>
            <div>
                <h2>Home Page</h2>
                <p>Portfolio link would go here</p>
                <Link to="/Portfolio">Portfolio</Link>
                <br />
                <Link to="/Contacts">Contact</Link>
                <br />
                <Link to="/About">About</Link>
                <br />
                <Link to="/Resume">Resume</Link>
                <br />
                <Link to="/Test">Test</Link>
                <br />
                <Link to="/Statistica">Statistica</Link>
                <br />
                <Link to="/Areus">Areus</Link>
                <br />
                <Link to="/News">News</Link>
                <br />
                <Link to="/Earth">Earth</Link>
                <br />
                <Link to="/SM">SM</Link>
                <br />
                <Link to="/Property">Property</Link>
                <br />
            </div>

        </>
    )
}