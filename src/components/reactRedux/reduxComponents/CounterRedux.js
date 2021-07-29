import React from 'react';
import ReactRedux from "../ReactRedux";
import {connect} from "react-redux";
import {incrementNumber, decrementNumber} from "../actions/counterAction";

const CounterRedux = (props) => {
    return (
        <ReactRedux>
            <div className="w-1/4 mx-auto mt-6">
                <div className="border-2 rounded-md p-6">
                    <h1 className="text-center font-bold text-4xl font-noto">{props.number}</h1>
                    <div className="flex justify-between mt-4 pt-4 border-t-2">
                        <button type="button" onClick={props.decrementNumber}
                                className="rounded-md bg-red-500 hover:bg-red-600 text-white font-bold w-8 h-8">-
                        </button>
                        <button type="button" onClick={props.incrementNumber}
                                className="rounded-md bg-green-500 hover:bg-green-600 text-white font-bold w-8 h-8">+
                        </button>
                    </div>
                </div>
            </div>
        </ReactRedux>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        number: state.counterReducer.number
    }
};

export default connect(mapStateToProps, {incrementNumber, decrementNumber})(CounterRedux);