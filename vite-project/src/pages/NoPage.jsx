import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';
import '../index.css'

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
            <div>
            <br />
            <Modal></Modal>
            </div>
        </>
    )
}