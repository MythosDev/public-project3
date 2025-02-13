import { Link } from 'react-router-dom';

import Grid from "../components/Grid";
import '../index.css'
import PortfolioPersonalCard from '../components/PortfolioPersonalCard';

export default function () {
    return(
        <>
            <div>
                <h2>Portfolio Page</h2>
                <p>Hi my name is William Busch</p>
                <Link to="/Home">Home</Link>
                <PortfolioPersonalCard />
                <Grid />
            </div>

        </>
    )
}