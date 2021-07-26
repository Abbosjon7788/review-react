import React, {Component} from 'react';

class CounterClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    }

    render() {
        const increaseNumber = () => {
            this.setState({number: this.state.number + 1});
        };

        const decreaseNumber = () => {
            this.setState({number: this.state.number - 1});
        };


        return (
            <div className="bg-white w-full overflow-hidden border rounded-lg">
                <h1 className="bg-gray-200 text-2xl font-noto font-bold text-center p-4 mb-4">Counter Class</h1>
                <h3 className="font-bold text-4xl my-8 text-center">{this.state.number}</h3>
                <div className="bg-yellow-50 border-t p-4 flex justify-between py-4">
                    <button type="button" onClick={decreaseNumber}
                            className="px-3 text-lg py-1 text-white bg-red-500 rounded-lg font-bold hover:bg-red-600">-
                    </button>
                    <button type="button" onClick={increaseNumber}
                            className="px-3 text-lg py-1 text-white bg-green-500 font-bold rounded-lg hover:bg-green-600">+
                    </button>
                </div>
            </div>
        );
    }
}

export default CounterClass;