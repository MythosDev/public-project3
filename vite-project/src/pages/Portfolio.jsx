import { Link } from 'react-router-dom';
import '../Global.module.css'

export default function () {
    return(
        <>
            <div className="rootStyles">
                <h2>Portfolio Page</h2>
                <p>Hi my name is XXXX XXXXX</p>
                <Link to="/Home">Home</Link>
            </div>

        </>
    )
}