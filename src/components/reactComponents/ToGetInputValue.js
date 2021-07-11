import React, {Component} from 'react';

class ToGetInputValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Title"

        }
    };


    render() {
        const editTitle = (event) => {
            event.preventDefault(); //bu page refresh bo'lishini oldini oladi

            console.log("come");
            this.setState({title: event.target.title.value});
            event.target.reset();
        };

        return (
            <form onSubmit={editTitle} className="bg-white border rounded-lg overflow-hidden">
                <div className="p-4 border-b bg-blue-100">
                    <h3 className="font-bold text-4xl text-center font-noto">{this.state.title}</h3>
                </div>
                <div className="p-4">
                    <input type="text" name="title" placeholder="type..."
                           className="w-full border p-4 font-noto text-md"/>
                </div>
                <div className="bg-blue-100 border-t p-4 flex justify-center">
                    <button type="submit"
                            className="uppercase font-semibold font-serif rounded-lg bg-green-500 text-white hover:bg-green-600 px-3 py-2">Change
                        title
                    </button>
                </div>
            </form>
        );
    }
}

export default ToGetInputValue;