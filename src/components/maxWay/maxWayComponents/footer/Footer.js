import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="bg-magenta flex py-20">
                <div className="w-1/2 pl-32">
                    <h1 className="text-5xl font-sans text-white font-bold leading-relaxed tracking-wider">Mobil ilovamiz <br/> orqali buyurtma <br/> berish yanada osonroq</h1>
                    <div className="flex mt-20">
                        <a href="#" className="flex text-xl tracking-wider mr-6 items-center text-white py-3 px-6 border rounded-r-full rounded-l-full">
                            <img src="./maxWayImages/images/play-market.svg" alt="" className="mr-4"/>
                            <span className="mr-2 font-semibold">Google</span>
                            <span>play</span>
                        </a>
                        <a href="#" className="flex items-center text-white tracking-wider py-3 text-xl px-6 border rounded-r-full rounded-l-full">
                            <img src="./maxWayImages/images/app-store.svg" alt="" className="mr-4"/>
                            <span>App Store</span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 overflow-hidden relative">
                    <img src="./maxWayImages/images/path.svg" className="w-full" alt=""/>
                    {/*<img src="./maxWayImages/images/iphone.svg" className="absolute z-9999 bottom-0 right-0 h-36" alt=""/>*/}
                </div>
            </div>
        );
    }
}

export default Footer;