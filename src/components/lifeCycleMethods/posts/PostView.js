import React, {useState, useEffect} from 'react';
import LifeCycleMethods from "../LifeCycleMethods";
import axios from 'axios';

const PostView = (props) => {
    // console.log(props);

    const [info, setInfo] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id)
            .then((res)=>{
                // console.log(res);
                setInfo(res.data);
            })
        axios.get('https://jsonplaceholder.typicode.com/users/' + info.userId)
            .then((res2)=>{
                console.log(res2);
            })
    });

    return (
        <LifeCycleMethods>
            <div className="w-1/2 mx-auto mt-8">
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
                    <div className="flex items-center pt-2 border-t-2">
                        <h1 className="font-noto tracking-widest text-blue-600 font-bold text-xl mr-3">user:</h1>
                        <span className="font-mono text-lg italic">info</span>
                    </div>
                </div>

            </div>
        </LifeCycleMethods>
    );
};

export default PostView;