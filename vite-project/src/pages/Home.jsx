import { Link } from 'react-router-dom';
import '../Global.module.css'

export default function () {

    return(
        <>
            {/* className="rootStyles" */}
            <div className="text-center justify-center text-lg font-medium">
                <h2 className='text-4xl font-bold m-6'>Home Page</h2>
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
                <Link to="/Eighties">Eighties</Link>
                <br />
                <Link to="/Property">Property</Link>
                <br />
                <Link to="/VPN">Atlas VPN</Link>
                <br />
                <Link to="/Org">Org</Link>
                <br />
                <Link to="/SimpleNews">Sim News</Link>
                <br />
                <Link to="/PokiToki">PokiToki</Link>
                <br />
                <Link to="/Arcade">Arcade</Link>
                <br />
                <Link to="/Movies">Movies</Link>
                <br />
                <Link to="/MoviesSecond">Movies Second</Link>
            </div>

        </>
    )
}