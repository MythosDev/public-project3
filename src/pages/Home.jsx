import { Link } from 'react-router-dom';

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
            </div>

        </>
    )
}