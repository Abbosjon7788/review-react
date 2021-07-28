import React, {Component} from 'react';
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import LifeCycleMethods from "../LifeCycleMethods";


class Users extends Component {

    constructor(props) {
        super(props);
        this.state={
            users: [],
            color: '#36D7B7',
            loading: true,
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                console.log(res);
                this.setState({users: res.data})
            })
            .finally(()=>{
                this.setState({loading: false});
            })
            .catch((errors)=>{
                // bu funksiya xatolik bolganda ishga tushadi
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
                    this.state.users.map((element)=>(
                        <div className="w-1/3 p-4">
                            <div className="rounded-md border-2 p-4">
                                <h1 className="bg-gray-100 text-xl text-center font-noto font-bold tracking-widest py-2">{element.name}</h1>
                                <div className="mt-2">
                                    <h3 className="text-lg text-red-600 tracking-wider font-bold font-serif">Info:</h3>
                                    <div className="flex items-center">
                                        <p className="font-semibold text-blue-600 font-serif mr-3 tracking-wider">Id:</p>
                                        <p>{element.id}</p>
                                    </div>
                                    <div className="flex mt-2 items-center">
                                        <p className="font-semibold text-blue-600 font-serif mr-3 tracking-wider">Username:</p>
                                        <p>{element.username}</p>
                                    </div>
                                    <div className="flex mt-2 items-center">
                                        <p className="font-semibold text-blue-600 font-serif mr-3 tracking-wider">Email:</p>
                                        <p>{element.email}</p>
                                    </div>
                                    <div className="flex mt-2 items-center">
                                        <p className="font-semibold text-blue-600 font-serif mr-3 tracking-wider">Address:</p>
                                        <p>{element.address.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </LifeCycleMethods>
        );
    }
}

export default Users;