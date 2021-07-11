import React, {Component} from 'react';

class MainView extends Component {
    render() {
        return (
            <div className="flex lg:flex-row lg:flex-none lg:w-full lg:box-border flex-col flex-col-reverse mb-20">
                <div className="lg:w-3/5 w-full flex flex-col lg:mt-0 mt-20">
                    <div className="lg:bg-transparent lg:w-1/2 relative lg:pt-0 pt-80 lg:mt-0 mt-52 bg-magenta lg:px-0 md:px-12 lg:pb-0 pb-14">
                        <h1 className="xl:text-6xl text-5xl lg:text-black text-white lg:text-left text-center tracking-wider leading-tight font-extrabold lg:mx-0 mx-auto lg:w-full w-1/2">Siz izlagan mazzali ta’mlar</h1>
                        <p className="mt-4 text-base lg:text-left text-center lg:text-black text-white lg:w-full w-1/2 lg:mx-0 mx-auto">When an unknown printer took a galley of type scrambled it to make a type specimen </p>
                    </div>
                    <div className="flex items-end lg:mt-14 mt-8 h-1/2">
                        <div className="xl:w-1/3 w-2/5 overflow-hidden mr-5 pt-4 pl-4 rounded-md bg-yellow-400">
                            <button type="button" className="flex items-center px-4 py-1 rounded-2xl bg-yellow-300">
                                <img src="./maxWayImages/images/fire.svg" alt=""/>
                                <span className="text-white text-sm ml-2">Yangi</span>
                            </button>
                            <div className="flex justify-between items-end">
                                <span className="font-bold uppercase xl:text-3xl lg:text-2xl xl:tracking-widest pb-4 text-yellow-600">Pit <br/> <span className="xl:ml-3 lg:ml-2">-</span>sa</span>
                                <img src="./maxWayImages/images/pitsa-main.svg" className="xl:h-32 lg:h-28 h-20" alt=""/>
                            </div>
                        </div>
                        <div className="xl:w-1/3 w-2/5 overflow-hidden pt-4 pl-4 rounded-md bg-magenta">
                            <button type="button" className="flex items-center px-4 bg-light-magenta py-1 rounded-2xl">
                                <img src="./maxWayImages/images/rocket.svg" alt=""/>
                                <span className="text-white text-sm ml-2">Ko'p sotilgan</span>
                            </button>
                            <div className="flex justify-between items-end">
                                <span className="font-bold uppercase xl:text-3xl lg:text-2xl tracking-widest pb-4 text-lightest-magenta"><span className="xl:ml-6 lg:ml-4 ml-3">Kom</span> <br/> -bo</span>
                                <img src="./maxWayImages/images/kombo-main.svg" className="xl:h-32 lg:h-28 h-20" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/5 lg:block flex justify-center w-full bg-magenta lg:h-auto h-3/5 lg:relative">
                    <img src="./maxWayImages/images/burger-main.svg" className="absolute lg:-left-1/3 xl:top-1/10 lg:t-1/5 top-1/5 lg:transform lg:scale-125 scale-100" alt=""/>
                </div>
            </div>
        );
    }
}

export default MainView;