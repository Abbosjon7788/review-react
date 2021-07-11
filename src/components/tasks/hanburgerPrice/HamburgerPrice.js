import React, {Component} from 'react';

class HamburgerPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            price: 9
        };
    }

    render() {
        const increaseNumber = () => {
            this.setState({number: this.state.number + 1});
            showOrder();
        };

        const decreaseNumber = () => {
            if (this.state.number > 0) {
                this.setState({number: this.state.number - 1})
            }
            showOrder();

        };

        const showOrder = () => {
            if (this.state.number !== 0) {
                return 'translate-y-0';
            } else {
                return '-translate-y-10';
            }
        };


        const calculatePrice = () => {
            if (this.state.number > 0) {
                alert("Total number: " + this.state.number + "\nPer hamburger: 9$ \n_________________ \nTotal price: " + this.state.price * this.state.number + "$");
            }
        };

        console.log(this.state.number);


        return (
            <div className="bg-blue-100 rounded-lg p-8 flex justify-center">
                <div>
                    <div className="bg-white shadow-xl relative z-9999 py-6 px-12 rounded-t-lg">
                        <img src="../hamburgerPriceImages/hamburger-icon.png" className="w-40 mx-auto mt-2" alt=""/>
                        <h1 className="uppercase mt-6 tracking-widest font-bold font-sans text-2xl">Hamburger</h1>
                        <p className="text-xl text-center tracking-wider my-6">9$</p>
                        <div className="flex justify-center">
                            <div className="flex shadow-lg border rounded-lg overflow-hidden">
                                <button className="py-2 border-r text-2xl font-bold w-10 bg-yellow-100"
                                        onClick={decreaseNumber} type="button">-
                                </button>
                                <div className="py-2 text-2xl text-center font-bold w-16">{this.state.number}</div>
                                <button className="py-2 text-2xl border-l font-bold w-10 bg-yellow-100"
                                        onClick={increaseNumber} type="button">+
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`py-4 shadow-xl -z-1 transition-all duration-500 transform ${showOrder()} rounded-b-lg cursor-pointer text-center text-white font-sans tracking-wider uppercase text-xl font-semibold bg-yellow-300 hover:bg-yellow-400`}
                        onClick={calculatePrice}>Order
                    </div>
                </div>

            </div>
        );
    }
}

export default HamburgerPrice;