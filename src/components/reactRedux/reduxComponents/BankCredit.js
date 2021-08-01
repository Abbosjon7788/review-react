import React from 'react';
import ReactRedux from '../ReactRedux';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import CreditCalendar from './CreditCalendar';

const BankCredit = (props) => {

    const data = [
        {previousPercentage: [20, 25, 30, 35, 45], label: "Boshlang'ich to'lov foizi", mark: "%", name: "previousPercentage"},
        {previousPercentage: [12, 16, 20, 24], label: "Yillik foizi", mark: "%", name: "annualPercentage"},
        {previousPercentage: [1, 2, 3, 4, 5], label: "Yillik muddat", mark: "yil", name: "annualTerm"},
        {previousPercentage: [2019, 2020, 2021, 2022, 2023, 2024], label: "Kalendar yil", mark: " - yil", name: "calendarYear"},
        {previousPercentage: ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'], label: "Kalendar oy", mark: "", name: "calendarMonth"},
    ];

    const saveChanges = (event, errors, values) => {
        if(values.creditAmount !== '' && values.previousPercentage !== '' && values.annualPercentage !== '' && values.annualTerm !== '' && values.calendarYear !== '' && values.calendarMonth !== ''){
            console.log(values);
        }else{
            alert('Please fill out all feilds!');
        }
    };

    return (
        <ReactRedux>
            <div className="w-10/12 mx-auto rounded-md pb-6 overflow-hidden border">
                <h1 className="font-bold font-serif tracking-widest p-6 text-xl bg-gray-200 border-b">Credit calculator</h1>
                <AvForm onSubmit={saveChanges}  className="flex flex-wrap">
                    <div className="w-1/2 px-6 pt-6">
                        <AvField
                            label="Kredit miqdori"
                            name="creditAmount"
                            type="number"
                            placeholder="Enter any amount"
                            className="px-4 py-2 block mt-2 font-noto border w-full rounded-md "
                        />
                    </div>
                    {
                        data.map((element)=>(
                            <div className="w-1/2 px-6 pt-6">
                                <AvField
                                    label={element.label}
                                    name={element.name}
                                    type="select"
                                    className="px-4 py-2 block mt-2 font-noto border w-full rounded-md "
                                >
                                    {/*default value of option*/}
                                    <option value=""/>
                                    {
                                        element.previousPercentage.map((element2)=>(
                                            <option value={element2}>{element2 + element.mark}</option>
                                        ))
                                    }
                                </AvField>
                            </div>
                        ))
                    }

                    <div className="w-full">
                        <button type="submit" className="px-4 tracking-wider py-2 text-white block ml-auto text-lg rounded-md mr-6 mt-6 bg-green-400 hover:bg-green-500">Calculate</button>
                    </div>
                </AvForm>
            </div>
            
            <CreditCalendar/>
        </ReactRedux>
    );
};

export default BankCredit;