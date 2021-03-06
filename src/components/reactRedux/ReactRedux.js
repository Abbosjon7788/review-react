import React from 'react';
import {Link} from "react-router-dom";

const ReactRedux = (props) => {
    return (
        <>
            <h1 className="font-serif w-full text-3xl text-center font-bold tracking-widest">React Redux</h1>
            <div className="mt-8 flex mx-auto w-3/5">
                <Link to="/react-redux/counter-redux" className="text-lg mr-6 block font-mono flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white tracking-wider w-1/5 rounded-md py-1">Counter Redux</Link>
                <Link to="/react-redux/bank-credit" className="text-lg block font-mono flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white tracking-wider w-1/5 rounded-md py-1">Bank Credit</Link>
            </div>

            <div className="flex flex-wrap mt-8 w-10/12 mx-auto">
                {props.children}
            </div>
        </>
    );
};

export default ReactRedux;