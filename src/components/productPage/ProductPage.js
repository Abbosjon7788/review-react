import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Modal, ModalBody, ModalFooter} from "reactstrap";

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            modalOpen: false
        }
    }


    render() {
        const saveProduct = (event, error, value) => {//AvForm give us three attributes: event, error, and value
            // console.log(error);
            // console.log(value);
            // console.log("Result" + value);

            //First method
            // let temp = this.state.products;
            // temp.push(value);//push() returns (number) new length of the array
            // this.setState({products: temp});

            //Second method
            if (value.productName !== "" && value.productPrice !== "" && value.productColor !== "") {
                this.setState({products: [...this.state.products, value]});//this method adds new objects to the given array without changing its elements
            } else {
                alert("Please input any value!")
            }

            //Third method
            // this.setState({products: this.state.products.concat(value)});//concat() returns object

            // console.log(this.state.products);
            console.log("Length: " + value.length);

            this.form && this.form.reset();//this method is to clear AvField input.
        };

        const deleteProduct = (index) => {
            // console.log("This function is working!");
            this.state.products.splice(index, 1);
            this.setState({products: this.state.products});
        };

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        };

        return (
            <div className="rounded-lg bg-blue-100 p-8">
                <div className="w-1/3 mx-auto bg-white p-6 rounded-lg">
                    <AvForm onSubmit={saveProduct} ref={(c) => (this.form = c)}>
                        {/*//if onSubmit is changed with onValidSubmit and added required property to all AvFields, then we don't need to check object it has any value or not?*/}
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
                                className="px-4 ml-auto block py-1 rounded-lg bg-green-300 hover:bg-green-400 text-white text-lg font-semibold">Add
                        </button>
                    </AvForm>
                </div>

                <div className="flex flex-wrap mt-4">
                    {
                        this.state.products.map((element, index) => (

                                <div className="p-4 w-1/5">
                                    <div
                                        className="bg-white border-2 border-blue-500 cursor-pointer hover:border-blue-700 rounded-lg p-6">
                                        <div className="flex items-center">
                                            <h1 className="text-xl font-serif mr-3 font-semibold">Title:</h1>
                                            <span
                                                className="font-bold text-base tracking-widest font-noto">{element.productName}</span>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <h1 className="text-xl font-serif mr-3 font-semibold">Price:</h1>
                                            <span
                                                className="font-bold text-base tracking-widest font-noto">{element.productPrice}$</span>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <h1 className="text-xl font-serif mr-3 font-semibold">Color:</h1>
                                            <span className="font-bold text-base font-noto"
                                                  style={{color: element.productColor}}>{element.productColor}</span>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <button type="button" onClick={() => changeModal()}
                                                    className="bg-green-400 hover:bg-green-500 text-base font-semibold py-1 px-3 text-white rounded-lg">Edit
                                            </button>
                                            <button type="button" onClick={() => deleteProduct(index)}
                                                    className="bg-red-500 hover:bg-red-600 text-base font-semibold py-1 px-3 text-white rounded-lg">Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )
                        )

                    }
                </div>

                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm>
                        <ModalBody>

                        </ModalBody>

                        <ModalFooter>

                        </ModalFooter>
                    </AvForm>

                </Modal>

            </div>
        );
    }
}

export default ProductPage;