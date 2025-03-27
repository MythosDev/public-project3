import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../../components/BottomBar';
import TopBar from '../../components/TopBar';
import Cabinet from './Cabinet';
import ContactCard from '../../components/ContactCard';
import EmailBox from '../../components/EmailBox';
import ArcadeCabinet from './ArcadeCabinet';
import GeoMap from '../../components/GeoMap';


const Cover = '/Cover_Art.png'
const Name = 'Bloodlust'

const Demo = 'demo_pic.png'
const MyName = "William Busch"

export default function () {
    return (
        <>
            <TopBar />
            <div className='mt-16 ml-2 mr-2'>
                <h1 className='text-4xl text-gray-900 font-extrabold pl-4 pt-4 pb-2'>Action</h1>
                <div className=" flex justify-start space-x-8 p-4">
                    <Cabinet screenImage={Cover} name={Name}>
                        {/* <img src="/Cover_Art.png" alt="" /> */}
                    </Cabinet>
                    <Cabinet />
                    <Cabinet />
                    <ArcadeCabinet screenImage={Cover} />
                </div>
                <div className="flex justify-center mt-4">
                    <a href="/Resume.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded-lg">Download Resume (PDF)</a>
                </div>
                <div className='flex justify-center m-4 gap-4'>
                    <ContactCard screenImage={Demo} name={MyName}/>
                    <EmailBox/>
                    <GeoMap />
                </div>
                <br />
                <EmailBox/>
                <br />
                <ContactCard screenImage={Demo} name={MyName}>
                        <EmailBox/>
                </ContactCard>
                <br />
                <br />
                <br />
                <br />
            </div>
            <GeoMap/>
            <ContactCard screenImage={Demo} name={MyName}/>
            <br />
            <br />
            <br />
            <br />
            <BottomBar />
        </>
    );
}