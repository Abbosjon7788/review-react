import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="bg-magenta xl:flex xl:flex-wrap flex xl:flex-row flex-col-reverse xl:py-20 py-16 xl:mt-0 mt-32 xl:px-0 px-20">
                <div className="xl:w-1/2 w-full xl:pl-32">
                    <h1 className="xl:text-5xl text-6xl xl:mt-0 mt-36 xl:text-left text-center font-sans text-white font-bold leading-relaxed tracking-wider">Mobil ilovamiz <br/> orqali buyurtma <br/> berish yanada osonroq</h1>
                    <div className="flex mt-20 xl:flex-row xl:w-auto w-full flex-col">
                        <a href="#" className="xl:flex xl:w-0 w-full xl:ml-0 mx-auto inline-flex justify-center xl:text-xl text-2xl xl:w-auto tracking-wider xl:mr-6 xl:mb-0 mb-6 items-center text-white py-3 px-6 border rounded-r-full rounded-l-full">
                            <img src="./maxWayImages/images/play-market.svg" alt="" className="mr-4"/>
                            <span className="mr-2 font-semibold">Google</span>
                            <span>play</span>
                        </a>
                        <a href="#" className="xl:flex xl:w-0 w-full xl:mx-0 mx-auto inline-flex justify-center xl:w-auto items-center text-white tracking-wider py-3 xl:text-xl text-2xl px-6 border rounded-r-full rounded-l-full">
                            <img src="./maxWayImages/images/app-store.svg" alt="" className="mr-4"/>
                            <span>App Store</span>
                        </a>
                    </div>
                </div>
                <div className="xl:w-1/2 w-full relative">
                    <img src="./maxWayImages/images/path.svg" className="w-full" alt=""/>
                    <img src="./maxWayImages/images/iphone.png" className="absolute z-9999 w-full xl:-top-3/4 -top-3/4 xl:-left-1/8" alt=""/>
                </div>               


            </div>
        );
    }
}

export default Footer;