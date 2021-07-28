import React, {useState, useEffect} from 'react';
import LifeCycleMethods from "../LifeCycleMethods";
import axios from 'axios';
import {Link} from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from "@emotion/react";

const Posts = () => {

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const override = css`
        display: block;
        margin: 100px auto;
    `;
    const color = '#0AC5C5';


    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
           .then((res)=>{
               // console.log(res);
               setPosts(res.data);
           })
           .finally(()=>{
               setLoading(false);
           })
    });

    return (
        <LifeCycleMethods>
            <div className="flex flex-wrap w-full">
                <ClipLoader color={color} loading={loading} css={override} size={150} />
                {
                    posts.map((element)=>(
                        <div className="w-1/4 p-4">
                            <div className="border h-32 rounded-md p-6">
                                <h1>{element.title} <Link to={`/life-cycle-methods/posts/${element.id}`} className="ml-1 text-blue-600 hover:underline">more...</Link></h1>
                            </div>
                        </div>
                    ))
                }

            </div>
            
        </LifeCycleMethods>
    );
};

export default Posts;