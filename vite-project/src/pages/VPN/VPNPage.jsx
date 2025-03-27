import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../../components/BottomBar';
import VPNChip from './VPNChip';
import VPNComponent from './VPNComponent';
import VPNTopBar from './VPNTopBar';

//get rid of this compenent here it is not needed
//iclude download PDF button for resume


export default function () {
    return(
        <>
            <VPNTopBar />
            <div>
                <Link to="/Home">Home</Link>
            </div>
            <VPNChip />
            <VPNComponent />
            <BottomBar/>

        </>
    )
}