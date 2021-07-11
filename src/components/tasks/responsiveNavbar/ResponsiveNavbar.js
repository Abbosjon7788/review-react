import React, {Component} from 'react';
import './styles/responsive-navbar.scss';

class ResponsiveNavbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: true
        }
    }

    render() {

        const toggle = () =>{
          this.setState({isOpen: !this.state.isOpen});
        };

        return (
            <nav className="p-6 bg-gray-800 flex items-center flex-wrap">
                <a href="#" className="inline-flex mr-4 p-2 items-center">
                    <span className="text-white uppercase tracking-widest font-bold text-xl">Logo</span>
                </a>
                <button type="button" onClick={toggle}
                        className="inline-flex p-3 rounded-md ml-auto hover:bg-gray-900 lg:hidden">
                    <span className="icon icon-burger"/>
                </button>
                <div id="navigation"
                     className={`w-full ${this.state.isOpen ? 'hidden' : 'block'} lg:w-auto lg:inline-flex lg:flex-grow`}>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">Home</a>
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">About</a>
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">Services</a>
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">Gallery</a>
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">Products</a>
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">Products</a>
                        <a href="#" className="lg:inline-flex lg:w-auto px-3 lg:text-base text-sm py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900">Contact us</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default ResponsiveNavbar;