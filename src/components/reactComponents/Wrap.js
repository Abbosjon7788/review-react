import React, {Component} from 'react';
import CardItem from "./CardItem";
import CounterClass from "./CounterClass";
import ToGetInputValue from "./ToGetInputValue";
import CounterHooks from "./CounterHooks";

class Wrap extends Component {
    render() {
        return (
            <div className="flex flex-wrap px-4">
                <div className="w-1/3 p-4">
                    <CardItem title="Apple"/>
                </div>
                <div className="w-1/3 p-4">
                    <CardItem title="Google"/>
                </div>
                <div className="w-1/3 p-4">
                    <CardItem title="Facebook"/>
                </div>
                <div className="w-1/3 p-4">
                    <CounterClass/>
                </div>
                <div className="w-1/3 p-4">
                    <ToGetInputValue/>
                </div>
                <div className="w-1/3 p-4">
                    <CounterHooks/>
                </div>
            </div>
        );
    }
}

export default Wrap;