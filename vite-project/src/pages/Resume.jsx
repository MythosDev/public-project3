import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../components/BottomBar';

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
            <BottomBar/>

        </>
    )
}