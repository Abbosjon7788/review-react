import React, {useState, useEffect} from 'react';
import LifeCycleMethods from "../LifeCycleMethods";
import axios from 'axios';
import {css} from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const PostView = (props) => {
    // console.log(props);
    const override = css`
      display: block;
      margin: 100px auto;
    `;
    const color = '#36D7B7';
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id)
            .then((res) => {
                // console.log(res);
                setInfo(res.data);
            })
            .finally(() => {
                setLoading(false);
            })
        axios.get('https://jsonplaceholder.typicode.com/users/' + info.userId)
            .then((res2) => {
                // console.log(res2);
                setUser(res2.data)
            })
            .finally(() => {
                setLoading(false);
            })
    });

    return (
        <LifeCycleMethods>
            <ClipLoader color={color} loading={loading} css={override} size={150}/>
            <div className={`${loading ? 'hidden' : 'block'} w-1/2 mx-auto mt-8`}>
                <div className="border-2 rounded-md p-6">
                    <div className="flex pb-2 items-center">
                        <h1 className="font-noto text-red-600 tracking-widest font-bold text-xl mr-3">title:</h1>
                        <span className="font-mono text-lg italic">{info.title}</span>
                    </div>
                    <div className="flex items-center py-2 border-t-2">
                        <h1 className="font-noto text-red-600 tracking-widest font-bold text-xl mr-3">body:</h1>
                        <span className="font-mono text-lg italic">{info.body}</span>
                    </div>
                    <div className="flex items-center py-2 border-t-2">
                        <h1 className="font-noto text-red-600 tracking-widest font-bold text-xl mr-3">id:</h1>
                        <span className="font-mono text-lg italic">{info.id}</span>
                    </div>
                    <div className="flex items-center py-2 border-t-2">
                        <h1 className="font-noto tracking-widest text-blue-600 font-bold text-xl mr-3">user:</h1>
                        <span className="font-mono text-lg italic">{user.name}</span>
                    </div>
                    <div className="flex items-center pt-2 border-t-2">
                        <h1 className="font-noto tracking-widest text-blue-600 font-bold text-xl mr-3">user id:</h1>
                        <span className="font-mono text-lg italic">{user.id}</span>
                    </div>
                </div>
            </div>
        </LifeCycleMethods>
    );
};

export default PostView;