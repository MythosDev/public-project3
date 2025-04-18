import { Link } from 'react-router-dom';
import '../Global.module.css'

export default function () {

    return(
        <>
            {/* className="rootStyles" */}
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                    </button>
                </div>
            </div>
            <div className="hero-content flex-col lg:flex-row">
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Welcome to my website</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
            </div>
            <div className="text-center justify-center text-lg font-medium">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Projects</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                        <li><Link to="/Contacts">Contact</Link></li>
                        <li><Link to="/Contacts">Contact</Link></li>
                        <li><Link to="/Resume">Resume</Link></li>
                        <li><Link to="/Test">Test</Link></li>
                        <li><Link to="/UndergroundNews">Underground News</Link></li>
                        <li><Link to="/News">News</Link></li>
                        <li><Link to="/Earth">Earth</Link></li>
                        <li><Link to="/Eighties">Eighties</Link></li>
                        <li><Link to="/Property">Property</Link></li>
                        <li><Link to="/VPN">Atlas VPN</Link></li>
                        <li><Link to="/Org">Org</Link></li>
                        <li><Link to="/SimpleNews">Sim News</Link></li>
                        <li><Link to="/PokiToki">PokiToki</Link></li>
                        <li><Link to="/Arcade">Arcade</Link></li>
                        <li><Link to="/Movies">Movies</Link></li>
                        <li><Link to="/MoviesSecond">Movies Second</Link></li>
                        </ul>
                    </div>
                </div>
                <br />
                <Link to="/Statistica">Statistica</Link>
                <br />
                <Link to="/Eighties">Eighties</Link>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                        </fieldset>
                    </form>
                </footer>
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
                <Link to="/UndergroundNews">Underground News</Link>
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