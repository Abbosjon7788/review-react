import React, {Component} from 'react';
import PitsaTabs from "./PitsaTabs";
import KomboTabs from "./KomboTabs";
import BurgerTabs from "./BurgerTabs";
import BeverageTabs from "./BeverageTabs";
import NoOrder from "./NoOrder";

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            toggleTab: 1,
        }
    }

    render() {
        const toggle = (index) => {
            this.setState({toggleTab: index});
            console.log(index);
        }

        return (
            <div className="border-t-2 lg:overflow-hidden lg:ml-32 lg:mr-32 z-10 lg:box-border relative">
                <div className="flex mt-6 pb-28">
                    <button onClick={() => (toggle(1))} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 1 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Barchasi</span>
                    </button>
                    <button onClick={()=>toggle(2)} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 2 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Pitsa</span>
                    </button>
                    <button onClick={()=>toggle(3)} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 3 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Burger</span>
                    </button>
                    <button onClick={()=>toggle(4)} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 4 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Combo</span>
                    </button>
                    <button onClick={()=>toggle(5)} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 5 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Salat</span>
                    </button>
                    <button onClick={()=>toggle(6)} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 6 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Shirinliklar</span>
                    </button>
                    <button onClick={()=>toggle(7)} className={`w-1/8 px-6 py-2 rounded-3xl font-semibold ${this.state.toggleTab === 7 ? 'bg-yellow-400 text-white' : ''} text-black cursor-pointer justify-center flex`}>
                        <span>Ichimliklar</span>
                    </button>
                    <button className="w-1/8 px-6 py-2 rounded-3xl font-semibold hover:bg-gray-300 bg-gray-200 cursor-pointer justify-center flex">
                        <div className="flex items-center">
                            <span className="icon icon-filtr mr-2 icon-h-18 icon-w-18 icon-black"/>
                            <span>Filtr</span>
                        </div>
                    </button>
                </div>
                {
                    this.state.toggleTab === 1 ? (
                        <>
                            <PitsaTabs/>
                            <BurgerTabs/>
                            <KomboTabs/>
                            <BeverageTabs/>
                        </>
                    ) : ''
                }
                {
                    this.state.toggleTab === 2 ? (
                        <PitsaTabs/>
                    ) : ''
                }
                {
                    this.state.toggleTab === 3 ? (
                        <BurgerTabs/>
                    ) : ''
                }
                {
                    this.state.toggleTab === 4 ? (
                        <KomboTabs/>
                    ) : ''
                }
                {
                    this.state.toggleTab === 5 ? (
                        <NoOrder/>
                    ) : ''
                }
                {
                    this.state.toggleTab === 6 ? (
                        <NoOrder/>
                    ) : ''
                }
                {
                    this.state.toggleTab === 7 ? (
                        <BeverageTabs/>
                    ) : ''
                }
                
            </div>
        );
    }
}

export default Tabs;