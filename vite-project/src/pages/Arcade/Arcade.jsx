import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../../components/BottomBar';
import TopBar from '../../components/TopBar';
import Cabinet from './Cabinet';
import ContactCard from '../../components/ContactCard';
import EmailBox from '../../components/EmailBox';
import ArcadeCabinet from './ArcadeCabinet';
import GeoMap from '../../components/GeoMap';
import GlobeComponent from '../../components/GlobeComponent';
import SkillGrid from '../../components/SkillGrid';

import CSharp from 'programming-languages-logos/src/csharp/csharp.png';
import Javascript from 'programming-languages-logos/src/javascript/javascript.png';
import Java from 'programming-languages-logos/src/java/java.png';
import Python from 'programming-languages-logos/src/python/python.png'
import HTML from 'programming-languages-logos/src/html/html.png'
import CSS from 'programming-languages-logos/src/css/css.png'
import Cplusplus from '../../assets/c++.png';
import ReactIcon from '../../assets/react.png';
import GodotIcon from '../../assets/godot_icon.svg';
import HLSLIcon from '../../assets/hlsl.png';
import PersonalCard from '../../components/PersonalCard';


const Skills = [
    { id: 1, title: "C#", poster: CSharp },
    { id: 2, title: "Javascript", poster: Javascript },
    { id: 3, title: "React", poster: ReactIcon },
    { id: 4, title: "Java", poster: Java },
    { id: 5, title: "Python", poster: Python },
    { id: 6, title: "HTML", poster: HTML },
    { id: 7, title: "CSS", poster: CSS },
    { id: 8, title: "GDScript", poster: GodotIcon },
    { id: 9, title: "C++", poster: Cplusplus },
    { id: 10, title: "HLSL", poster: HLSLIcon },
  ];

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
                    <PersonalCard />
                    <GeoMap />
                </div>
                <br />
                <EmailBox/>
                <PersonalCard />
                <div className='flex w-[500px] rounded-xl bg-slate-500 p-4 m-4 justify-around'>
                    <SkillGrid skills={Skills} />
                </div>
                <br />
                <div className='flex gap-20'>
                <PersonalCard />
                <GlobeComponent />
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
            {/* <GeoMap/> */}
            <ContactCard screenImage={Demo} name={MyName}/>
            <br />
            <br />
            <br />
            <br />
            <BottomBar />
        </>
    );
}