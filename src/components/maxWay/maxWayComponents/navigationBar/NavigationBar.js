import React, {Component} from 'react';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: true
        }
    }


    render() {
        const toggle = () =>{
            this.setState({isOpen: !this.state.isOpen});
        }
        return (
            <nav className="lg:flex lg:items-center flex flex-wrap">
                <a href="#" className="inline-flex">
                    <img src="./maxWayImages/images/logo.svg" alt=""/>
                </a>
                <button type="button" onClick={toggle}
                        className="inline-flex lg:hidden ml-auto items-center px-3 pt-3 pb-1 rounded hover:bg-gray-300">
                    <span className="icon icon-nav-toggle icon-w-18 icon-black"/>
                </button>
                <div className={`w-full ${this.state.isOpen ? 'hidden' : 'block'} lg:ml-auto lg:bg-transparent lg:rounded-none rounded-md lg:overflow-auto overflow-hidden bg-magenta lg:pt-0 pt-2 lg:mt-0 mt-4 lg:w-4/5 lg:flex lg:flex-grow'}`}>
                    <div className="lg:inline-flex lg:w-full lg:rounded-none rounded lg:overflow-auto overflow-hidden lg:flex-row flex items-center flex-col">
                        <div className="lg:w-3/5 w-full lg:pl-0 pl-4 lg:flex lg:items-center">
                            <a href="#" className="lg:mt-0 mt-2 lg:mr-1 lg:ml-auto lg:px-3 lg:py-1 font-semibold rounded lg:inline-flex flex lg:text-black text-white lg:hover:text-magenta border-2 border-transparent hover:border-magenta lg:focus:text-magenta">Menu</a>
                            <a href="#" className="lg:mt-0 mt-2 lg:mx-1 lg:px-3 lg:py-1 font-semibold rounded lg:inline-flex flex lg:text-black text-white lg:hover:text-magenta border-2 border-transparent hover:border-magenta lg:focus:text-magenta">Bolalar uchun</a>
                            <a href="#" className="lg:mt-0 mt-2 lg:ml-1 lg:mr-2 lg:px-3 lg:py-1 font-semibold rounded lg:inline-flex flex lg:text-black text-white lg:hover:text-magenta border-2 border-transparent hover:border-magenta lg:focus:text-magenta">Filtr</a>
                        </div>
                        <div className="lg:w-3/5 w-full xl:py-6 lg:py-5 py-4 lg:bg-magenta lg:flex lg:pl-0 pl-4 lg:items-center">
                            <a href="#" className="lg:inline-flex lg:mt-0 mt-2 xl:px-8 lg:px-6 lg:border-r-2 lg:border-yellow-400 flex items-center">
                                <span className="icon icon-call block icon-w-18 icon-yellow lg:mr-4 mr-3"/>
                                <div className="lg:block flex items-center">
                                    <span className="lg:block lg:font-normal text-white lg:leading-tight lg:text-sm font-bold">(+998971)</span>
                                    <span className="xl:text-2xl lg:text-lg lg:ml-0 ml-1 text-white lg:tracking-widest lg:leading-tight font-bold">200-54-00</span>
                                </div>
                            </a>
                            <a href="#" className="lg:inline-flex lg:mt-0 mt-2 xl:px-8 lg:px-6 flex items-center">
                                <span className="icon icon-korzina icon-yellow lg:mr-4 mr-3 icon-w-18 icon-h-21"/>
                                <div>
                                    <span className="lg:tracking-widest text-white lg:leading-tight lg:font-bold lg:text-lg xl:text-2xl text-lg font-bold lg:block lg:pr-0 pr-3 lg:border-r-0 border-r-2 border-yellow-500">Korzina</span>
                                    <span className="text-sm text-white lg:leading-tight lg:pl-0 pl-3">125,400 UZS</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;