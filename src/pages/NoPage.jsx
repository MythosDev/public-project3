import { Link } from 'react-router-dom';

export default function () {
    return(
        <>
            <div>
                <h2>Sorry! That page does not exist</h2>
                
                <p>Email: ____</p>
                <p>Phone: ____</p>
                <p>Name: ____</p>
                <Link to="/Home">Home</Link>
            </div>

        </>
    )
}