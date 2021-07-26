import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Flickr = () => {
    //font-mono  -  nav itemlar uchun
    //font-lobster  -  title uchun

    const apiKey = 'c89684f47df23ab5df22f8a08043bcfe';

    const [photos, setPhotos] = useState([]);

    const [title, setTitle] = useState('');

    const [loading,setLoading] = useState(true);
    const [color, setColor] = useState('#111212');
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) =>{
        setInputValue(event.target.value);
    };

    const search = (e) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${e}&per_page=24&format=json&nojsoncallback=1`)
            .then((res)=>{
                console.log(res);
                setPhotos(res.data.photos.photo);
            })
            .finally(()=>{
                setLoading(false);
            })
    };

    const check = () => {
        if(inputValue===''){
            alert('Please fill out the field');
        }else{
            console.log(inputValue);
            search(inputValue);
            setTitle(inputValue);
            setLoading(true);
            setInputValue('');

        }

    };



    useEffect(()=>{
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
            .then((res)=>{
                // console.log(res);
                setPhotos(res.data.photos.photo);
            })
            .finally(()=>{
                setLoading(false);
            })

    }, []);

    return (
        <>
            <h1 className="font-lobster mt-8 italic tracking-widest font-extrabold text-7xl text-center ">SnapShot</h1>

            <div className="flex w-1/3 mx-auto my-16">
                <input type="text" onChange={handleChange} value={inputValue} placeholder="Search..." className="bg-gray-100 focus:outline-none font-serif focus:ring-transparent p-2 w-9/10 border-2 border-r-0 border-gray-300 rounded-l-md"/>
                <button type="submit" onClick={()=>{check()}} className={`flex items-center justify-center bg-gray-800 hover:bg-gray-700 border-2 text-2xl border-l-0 border-gray-800 w-1/10 rounded-r-md`}>🔍</button>
            </div>

            <div className="flex justify-around mx-auto w-8/12 mb-12">
                <div className="w-1/8">
                    <Link onClick={()=>{search('mountain'); setLoading(true); setTitle('mountain')}} className="flex items-center justify-center py-1 w-full font-mono font-semibold text-white bg-gray-800 hover:bg-gray-700 text-ld tracking-widest rounded-md">Mountain</Link>
                </div>
                <div className="w-1/8">
                    <Link onClick={()=>{search('beaches'); setLoading(true); setTitle('beaches')}} className="flex items-center justify-center py-1 w-full font-mono font-semibold text-white bg-gray-800 hover:bg-gray-700 text-ld tracking-widest rounded-md">Beaches</Link>
                </div>
                <div className="w-1/8">
                    <Link onClick={()=>{search('birds'); setLoading(true); setTitle('birds')}} className="flex items-center justify-center py-1 w-full font-mono font-semibold text-white bg-gray-800 hover:bg-gray-700 text-ld tracking-widest rounded-md">Birds</Link>
                </div>
                <div className="w-1/8">
                    <Link onClick={()=>{search('food'); setLoading(true); setTitle('food')}} className="flex items-center justify-center py-1 w-full font-mono font-semibold text-white bg-gray-800 hover:bg-gray-700 text-ld tracking-widest rounded-md">Food</Link>
                </div>
            </div>

            <div className="flex flex-wrap w-10/12 mx-auto">

                <RingLoader color={color} loading={loading} css={override} size={150}/>
                <h1 className={`${loading ? 'hidden' : 'block'} w-full italic mb-8 text-center font-mono font-bold text-3xl tracking-widest`}><span className="mr-3 capitalize">{title}</span>Images</h1>

                {
                    photos.map((element)=>(
                        <div className={`${loading ? 'hidden' : 'block'} w-1/4 p-3`}>
                            <img src={`https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}_m.jpg`} className="rounded-lg w-full" alt=""/>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Flickr;