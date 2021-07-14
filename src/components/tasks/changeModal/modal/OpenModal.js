import React from 'react';
import Modal from './Modal';
import './modal.scss';

function OpenModal() {

	const openModal = () =>{
		console.log("This is modal!");	
	};

	return(
		<div>
			<button onClick={openModal} className="px-4 py-2 rounded-md bg-gray-600 font-semibold text-white text-lg hover:bg-gray-500 block mx-auto mt-16">Open Modal</button>
			<Modal>
				<h1 className="font-bold text-2xl">Modal Header</h1>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, dignissimos. Maiores dolorum accusamus itaque cupiditate?</p>
			</Modal>
		</div>
	);
}

export default OpenModal;