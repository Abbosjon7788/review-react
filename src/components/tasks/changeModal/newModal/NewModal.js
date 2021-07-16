import React, {Component} from 'react';
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './modal-style.scss';

export default class NewModal extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
    }
  }

  render(){

    const onOpenModal = () =>{
      this.setState({open: true});
    }

    const onCloseModal = () =>{
      this.setState({open: false});
    }

    return(
      <div>
        <button onClick={onOpenModal} className="px-4 py-2 rounded-lg bg-green-300 text-white font-semibold mx-auto block mt-16 hover:bg-green-400">Open modal!</button>

        <Modal open={this.state.open} onClose={onCloseModal} classNames={{modal: 'customModal'}} center>
          <div className="h-32 w-32 rounded-lg bg-red-300 p-8">
            <h2>modal is working</h2>            
          </div>
        </Modal>

      </div>
    );

  }
}