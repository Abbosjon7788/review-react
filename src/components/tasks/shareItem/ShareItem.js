import React, {Component} from 'react';
import "./styles/share-item.scss";

class ShareItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }


    render() {
        const changeToggle = () => {
            this.setState({toggle: !this.state.toggle});
        };
    
        return (
            <div className="bg-purple-300 p-8 flex items-center justify-center h-96 rounded-lg">
                <div className={`${this.state.toggle?'rounded-2xl active w-auto h-auto':'rounded-full w-16 h-16 overflow-hidden'} p-6 share-menu bg-gray-800`}>
                    <div className="flex items-center cursor-pointer py-2 pr-10 pl-2 rounded-lg hover:bg-gray-600">
                        <span className="icon icon-camera p-3 mr-4"/>
                        <span className="text-xl tracking-wider text-white">Photo</span>
                    </div>
                    <div className="flex items-center cursor-pointer py-2 pr-10 pl-2 rounded-lg hover:bg-gray-600">
                        <span className="icon icon-video p-3 mr-4"/>
                        <span className="text-xl tracking-wider text-white">Video</span>
                    </div>
                    <div className="flex items-center cursor-pointer py-2 pr-10 pl-2 rounded-lg hover:bg-gray-600">
                        <span className="icon icon-folder p-3 mr-4"/>
                        <span className="text-xl tracking-wider text-white">Files</span>
                    </div>
                    <div className="flex items-center cursor-pointer py-2 pr-10 pl-2 rounded-lg hover:bg-gray-600">
                        <span className="icon icon-microphone p-3 mr-4"/>
                        <span className="text-xl tracking-wider text-white">Radio</span>
                    </div>
                    <div className="flex items-center cursor-pointer py-2 pr-10 pl-2 rounded-lg hover:bg-gray-600">
                        <span className="icon icon-envelope p-3 mr-4"/>
                        <span className="text-xl tracking-wider text-white">Email</span>
                    </div>

                </div>
                <div className={`cursor-pointer share-button rounded-full z-9999 flex justify-center items-center w-16 h-16 ${this.state.toggle?'bg-red-500 active hover:bg-red-600':'bg-purple-500 hover:bg-purple-600'}`} onClick={changeToggle}>
                    <span className={`icon ${this.state.toggle?'icon-cancel':'icon-share'} p-4`}/>
                </div>

            </div>
        );
    }
}

export default ShareItem;