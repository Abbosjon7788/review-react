import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state={
            percentage: 0,
            toDoDatabase: [],
            doneDatabase: []
        };
    }


    render() {

        const saveInput = (event, errors, values) => {
            if (values.inputValue !== "") {
                this.setState({toDoDatabase: [...this.state.toDoDatabase, values]});
                console.log(this.state.toDoDatabase);
            } else {
                alert('Please fill out the field!')
            }

            this.form && this.form.reset();

        };

        const addDone = (index) =>{
            console.log(this.state.toDoDatabase[index]);

            this.setState({doneDatabase: [...this.state.doneDatabase, this.state.toDoDatabase[index]]});
            console.log(this.state.doneDatabase.length);

            this.state.toDoDatabase.splice(index,1);
            this.setState({toDoDatabase: this.state.toDoDatabase});
            this.state.doneDatabase.length = this.state.doneDatabase.length + 1;
            calculatePercentage();
        }

        const deleteDoneList = (index) =>{
            this.state.doneDatabase.splice(index,1);
            this.setState({doneDatabase: this.state.doneDatabase});
            calculatePercentage();
        };

        const calculatePercentage = () =>{
          // this.state.percentage = (this.state.doneDatabase.length/(this.state.toDoDatabase.length + this.state.doneDatabase.length) * 100;
          // this.setState({percentage: this.state.percentage});
          // console.log(this.state.percentage);
            let a = this.state.toDoDatabase.length;
            let b = this.state.doneDatabase.length;

            if (a === 0 && b === 0) {
                this.setState({percentage: 0});
            } else {
                this.state.percentage = b / (a + b) * 100;
                this.setState({percentage: this.state.percentage});
            }



            console.log("toDoDatabase: " + this.state.toDoDatabase.length);
            console.log("doneDatabase: " + this.state.doneDatabase.length);
        };
        
        return (
            <div className="flex mt-8 justify-center flex-wrap mb-8">
                <AvForm onSubmit={saveInput} ref={(c) => (this.form = c)} className="flex justify-center w-full items-center">
                    <AvField
                        name="inputValue"
                        type="text"
                        placeholder="Type here..."
                        className="border rounded-l-lg font-serif text-lg px-4 py-2 border-green-500"
                    />
                    <button type="submit" className="text-white text-lg px-4 py-2 rounded-r-lg border border-green-500 hover:border-green-600 bg-green-500 tracking-wider hover:bg-green-600">Add</button>
                </AvForm>

                <div className="relative pt-6 w-3/5">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                Task in progress
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-semibold inline-block text-blue-600">
                                {this.state.percentage}%
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
                        <div style={{width: this.state.percentage + "%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"/>
                    </div>
                </div>

                <div className="flex w-4/5 mt-6">
                    <div className="w-1/2 px-3">
                        <div className="border-2 rounded-md p-6">
                            <h1 className="uppercase font-bold text-center font-serif text-3xl">To do</h1>
                            {/*below code should be mapped*/}
                            {
                                this.state.toDoDatabase.map((element, index)=>(
                                    <div className="flex w-4/5 mx-auto mt-6">
                                        <span className="border w-9/10 text-xl tracking-wider text-center border-green-500 py-2 rounded-l-md block">{element.inputValue}</span>
                                        <span className="border w-1/10 text-xl text-center text-white border-green-500 text-white bg-green-500 font-bold cursor-pointer hover:bg-green-600 hover:border-green-600 py-2 rounded-r-md block" onClick={()=>addDone(index)}>&#10003;</span>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className="w-1/2 px-3">
                        <div className="rounded-md border-2 p-6">
                            <h1 className="uppercase font-bold text-center font-serif text-3xl">Done</h1>
                            {/*below code should be mapped */}
                            {
                                this.state.doneDatabase.map((element, index)=>(
                                    <div className="flex w-4/5 mx-auto mt-6">
                                        <span className="border w-9/10 text-xl tracking-wider text-center border-blue-500 py-2 rounded-l-md block">{element.inputValue}</span>
                                        <span className="border w-1/10 text-xl text-center text-white border-blue-500 text-white bg-blue-500 font-bold cursor-pointer hover:bg-blue-600 hover:border-blue-600 py-2 rounded-r-md block" onClick={()=>deleteDoneList(index)}>&#10005;</span>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ToDoList;