import React, {Component} from 'react';
import Modal from "./Modal";

class ChangeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

    }


    render() {

        const openModal = () => {
            this.setState({showModal: !this.state.showModal});
        };

        return (
            <div className="bg-red-100 p-8 flex rounded-lg justify-center">
                <button type="button" onClick={openModal}
                        className="py-2 px-4 tracking-widest rounded bg-gray-600 hover:bg-gray-700 text-white font-semibold font-noto">I'm
                    a modal
                </button>
                <Modal showModal = {this.state.showModal}/>
            </div>
        );
    }
}

export default ChangeModal;