import React, {Component} from 'react';
import CardItem from "./CardItem";
import Counter from "./Counter";
import ToGetInputValue from "./ToGetInputValue";

class Wrap extends Component {
    render() {
        return (
            <div className="flex flex-wrap">
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
                    <Counter/>
                </div>
                <div className="w-1/3 p-4">
                    <ToGetInputValue/>
                </div>
            </div>
        );
    }
}

export default Wrap;