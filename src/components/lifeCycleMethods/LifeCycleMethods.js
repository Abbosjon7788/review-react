import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


class LifeCycleMethods extends Component {

    //Methods -> get, post, put(edit), delete

    componentDidUpdate(prevProps, prevState, snapshot) {
        // bu funksiya component update bolganda, yani: state qanaqadir ozgarish bolganda yoki qandaydir ozgarish bolsa
        // console.log('This is componentDidUpdate');
    }

    componentWillUnmount() {
        // bu funksiya component yoqolishidan oldin yani biz boshqa bir page otishimizdan oldin ishlaydi
        // console.log('This is componentWillUnmount');
    }

    constructor(props) {
        super(props);
        // console.log('This is constructor function');
    }

    componentDidMount() {
        // bu funksiya component render bolib, sahifaga chiqib bolgandan keyin ishlaydi
        // console.log('This is componentDidMount');       
    }

    render() {
        // console.log('This is render function');

        return (
            <>
                <h1 className="font-serif w-full text-3xl text-center font-bold tracking-widest">JSON Placeholder</h1>
                <div className="mt-8 flex mx-auto w-3/5">
                    <Link to="/life-cycle-methods/users" className="text-lg font-mono flex items-center justify-center bg-gray-800 text-white tracking-wider w-1/8 rounded-md py-1">Users</Link>
                    <Link to="/life-cycle-methods/photos" className="text-lg font-mono ml-6 flex items-center justify-center bg-gray-800 text-white tracking-wider w-1/8 rounded-md py-1">Photos</Link>
                    <Link to="/life-cycle-methods/employee" className="text-lg font-mono ml-6 flex items-center justify-center bg-gray-800 text-white tracking-wider w-1/8 rounded-md py-1">Employee</Link>
                </div>
                
                <div className="flex flex-wrap mt-8 w-10/12 mx-auto">
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default LifeCycleMethods;