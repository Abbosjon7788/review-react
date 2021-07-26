import React, {Component} from 'react';
import LifeCycleMethods from "./LifeCycleMethods";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount() {

    }


    render() {

        const saveChanges = (event, error, values) => {
            if (values.firstName === '' || values.lastName === '' || values.salary === '' || values.age === '' || values.position === '') {
                alert('Please fill out all field');
            } else {
                axios.post('https://app-employ.herokuapp.com/api/employee', values) //post request da 2ta narsa beriladi 1-si, qaysi link ka yuborilishi, 2-si qanday value yuborilishi
                    .then((res)=>{
                        console.log(res);
                    })

                this.form && this.form.reset();
            }
        };

        return (
            <LifeCycleMethods>
                <div className="w-1/3 mx-auto mt-4 mb-8">
                    <AvForm onSubmit={saveChanges} ref={(c) => (this.form = c)} className="border-2 focus:outline-none focus:ring-2 focus:ring-transparent rounded-lg p-6">
                        <AvField
                            name='firstName'
                            label='Employee first name'
                            // required
                            type='text'
                            className='border-2 focus:outline-none focus:ring-2 focus:ring-transparent block font-noto mb-3 mt-1 p-2 w-full rounded-lg'
                        />
                        <AvField
                            name='lastName'
                            label='Employee last name'
                            // required
                            type='text'
                            className='border-2 focus:outline-none focus:ring-2 focus:ring-transparent block font-noto mb-3 mt-1 p-2 w-full rounded-lg'
                        />
                        <AvField
                            name='age'
                            label='Employee age'
                            // required
                            type='number'
                            className='border-2 focus:outline-none focus:ring-2 focus:ring-transparent block font-noto mb-3 mt-1 p-2 w-full rounded-lg'
                        />
                        <AvField
                            name='salary'
                            label='Employee salary'
                            // required
                            type='number'
                            className='border-2 focus:outline-none focus:ring-2 focus:ring-transparent block font-noto mb-3 mt-1 p-2 w-full rounded-lg'
                        />
                        <AvField
                            name='position'
                            label='Employee position'
                            // required
                            type='select'
                            className='border-2 focus:outline-none focus:ring-2 focus:ring-transparent block font-noto mb-3 mt-1 p-2 w-full rounded-lg'
                        >
                            <option value=''/>
                            <option value="Director">Director</option>
                            <option value="Director assistance">Director assistance</option>
                            <option value="Driver">Driver</option>
                            <option value="Developer">Developer</option>
                        </AvField>

                        <button type='submit' className='bg-green-500 mt-6 hover:bg-green-600 text-lg text-white font-bold tracking-widest py-1 px-6 rounded-lg block ml-auto'>Add</button>

                    </AvForm>
                </div>

            </LifeCycleMethods>
        );
    }
}

export default Employee;