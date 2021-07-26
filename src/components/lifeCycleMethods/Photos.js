import React, {Component} from 'react';
import LifeCycleMethods from "./LifeCycleMethods";
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

class Photos extends Component {

    constructor(props) {
        super(props);
        this.state={
            photos: [],
            loading: true,
            color: '#36D7B7'
        };

    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res)=>{
                console.log(res);
                this.setState({photos: res.data});
            })
            .finally(()=>{
                this.setState({loading: false});
            })
    }


    render() {

        const override = css`
            display: block;
            margin: 100px auto;
            border-color: red;
        `;

        return (
            <LifeCycleMethods>
                <ClockLoader color={this.state.color} loading={this.state.loading} css={override} size={150}/>
                {
                    this.state.photos.map((element)=>(
                        <div className="w-1/3 p-4">
                            <img src={element.url} alt="" className="w-full rounded-md"/>
                        </div>
                    ))

                }
            </LifeCycleMethods>
        );
    }
}

export default Photos;