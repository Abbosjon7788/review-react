import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';

const Modal = (props) => {
    console.log(props);
    return (
        <div>
            {props.showModal ? (
                <div className={`${props.showModal ? 'opacity-100 transition-all duration-200 translate-y-0' : 'opacity-0 -translate-y-full'} transform w-full h-full bg-gray-600 fixed flex items-center inset-0 justify-center`}>
                    <div className={`bg-white rounded-lg shadow-xl w-2/5 p-6 relative z-9999`}>
                        <AvForm>
                            <AvField
                                name="productName"
                                type="text"
                                label="Product Name"
                                className="border rounded-lg font-sans font-serif mt-2 mb-4 w-full p-2"
                                placeholder="Input name..."
                                errorMessage="You should fill out this field"//this property shows us error message we want
                            />
                            <AvField
                                name="productPrice"
                                type="number"
                                label="Product Price"
                                className="border rounded-lg font-sans font-serif mt-2 mb-4 w-full p-2"
                                placeholder="Input price..."
                            />
                            <AvField
                                name="productColor"
                                type="color"
                                label="Product Color"
                                className="border rounded-lg font-sans font-serif mt-2 mb-4 w-full p-1"
                            />

                            <button type="submit"
                                    className="px-4 ml-auto block py-1 rounded-lg bg-green-300 hover:bg-green-400 text-white text-lg font-semibold">Edit
                            </button>
                        </AvForm>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Modal;