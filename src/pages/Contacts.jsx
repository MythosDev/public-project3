import { Link } from 'react-router-dom';

export default function () {
    return(
        <>
            <div>
                <h2>Contacts</h2>
                <p>Email: ___</p>
                <p>Phone Number: ___</p>
                <p>Twitter (X): ___</p>
                <p>Youtube: ___</p>
                <Link to="/Home">Home</Link>
            </div>

        </>
    )
}