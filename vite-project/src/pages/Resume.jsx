import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../components/BottomBar';
import '../Global.module.css'
import VPNChip from './VPN/VPNChip';
import VPNComponent from './VPN/VPNComponent';

//get rid of this compenent here it is not needed
//iclude download PDF button for resume


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
            <VPNChip />
            <VPNComponent />
            <BottomBar/>

        </>
    )
}