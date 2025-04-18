import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MultiDropZone from '../components/MultiDropZone';
import TagSystem from '../components/TagSystem';
import MovieRatingSelect from '../components/MovieRatingSelect';
import TimelineEditor from '../components/TimelineEditor';
// import '../Global.module.css'

//get rid of this compenent here it is not needed
//iclude download PDF button for resume


export default function () {
    const [rating, setRating] = useState('');

    const customRatings = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Unrated'];

    const [subtitles, setSubtitles] = useState('');

    const [language, setLanguage] = useState('');
    const customLanguages = [
        'English', 'French', 'German', 'Spanish', 'Italian', 'Polish', 
        'Ukrainian', 'Russian', 'Lithuanian', 'Estonian', 'Finnish', 'Swedish', 
        'Norwegian', 'Danish', 'Dutch', 'Croatian', 'Slovenian', 'Czech', 
        'Slovakian', 'Hungarian', 'Romanian', 'Greek', 'Bulgarian', 'Macedonian', 
        'Serbian', 'Latin', 'Old English', 'Old Norse', 'Frisian', 'Normandy', 
        'Gaelic', 'Welsh', 'Icelandic', 'Portuguese'
    ];

    return(
        <>
            <div className='p-4 gap-4 items-center justify-center w-[1080px] flex flex-col bg-slate-400 h-full mx-auto'>
                <h1 className='text-xl font-bold'>Global</h1>
                <p>
                    different versions for each language. Value quality without having to hire extra people for the site. <br />
                    Once we expand into different countries for producing and financing films we can have them handle the site. <br /> <br />
                    Things like Tags, specs, release date original country etc. only have to be inputed once <br />
                    specs: aspect ration, release date, camera, film stock, og language, og country, film date, budget, aspect ratio, resolution <br />
                    The Directors cut is automatically the first option unless inputed to be otherwise, same with rating, language is always users language <br />
                    Length is auto generated. Thumbnails can be auto generated or manually chosen/added. <br />
                    Titles and descriptions are universal for a language <br />
                    User can select, film cut, subtitle language, audio language, rating version <br />
                    Subtitles come with CC options and extra narration for the deaf. <br /> <br />

                    BTS <br />
                    Behind the scenes documentary is included with the film. <br />
                    Commentary is included with the film. <br />
                    Additional art book links are included with the film. <br />
                    Actors and cast information is included on a seperate site or alongside the film. <br />

                    The film has a store page for merchandise in different languages <br />


                </p>
                <h3 className='text-xl font-bold'>Global</h3>
                <label htmlFor="">Tags:</label>
                <TagSystem />
                <h3 className='text-lg font-bold'>Specs Info</h3>
                <textarea name="" id="" cols="30" rows="10" className='bg-slate-300 text-slate-700 p-4 rounded-lg h-[100px]'></textarea>
                <p>
                    original language, Tags, Camera, Film Stock, Lens, Budget, Release Date, Country, Resolution, 
                </p>
                <br /><br /><br />
                <h1 className='text-xl font-bold'>Version</h1>
                <label htmlFor="">Name:</label>
                <input type="text" className='bg-slate-300 text-slate-700 p-4 rounded-lg'/>
                <label htmlFor="">Description:</label>
                <input type="text" className='bg-slate-300 text-slate-700 p-4 rounded-lg'/>
                <label htmlFor="">Thumbnails:</label>
                <button className='bg-slate-500 text-slate-800 p-4'>Auto Generate</button>
                <MultiDropZone />
                <h1 className='text-xl font-bold'>Episodes</h1>
                <h1 className='text-xl font-bold'>Subtitles</h1>
                <MovieRatingSelect 
                    label={"Subtitle Language"}
                    options={customLanguages}
                    value={subtitles}
                    onChange={(newSubtitles) => setSubtitles(newSubtitles)}
                />
                <h1 className='text-xl font-bold'>Rating Files</h1>
                <MultiDropZone />
                <MovieRatingSelect 
                    label={"Movie Rating"}
                    options={customRatings}
                    value={rating}
                    onChange={(newRating) => setRating(newRating)}
                />
                {/* {rating && (
                <p className="mt-4 text-green-600">
                    You selected: {rating}
                </p>
                )} */}
                <h1 className='text-xl font-bold'>Audio Files</h1>
                <MovieRatingSelect 
                    label={"Audio Language"}
                    options={customLanguages}
                    value={language}
                    onChange={(newLanguage) => setLanguage(newLanguage)}
                />
                <h1 className='text-xl font-bold'>Products</h1>
                <h1 className='text-xl font-bold'>Store</h1>
                <h1 className='text-xl font-bold'>Scenes</h1>
                <textarea name="" id="" cols="30" rows="10" className='bg-slate-300 text-slate-700 p-4 rounded-lg h-[100px]'></textarea>
                <h1 className='text-xl font-bold'>BTS</h1>
                <h1 className='text-lg font-bold'>Cast</h1>
                <p>look up by name</p>
                <h1 className='text-lg font-bold'>Commentary</h1>
                <MultiDropZone />
                <TimelineEditor />
                <Link to="/Home">Home</Link>
            </div>

        </>
    )
}