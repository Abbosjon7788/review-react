import React, {Component} from 'react';

class Trello extends Component {
    render() {
        return (
            <div className="flex mx-20 my-10">
                <div className="w-1/5 px-3 pt-6">
                    <div>
                        <button type="button" className="rounded-md px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-bold tracking-widest font-serif">Add board</button>
                        <div className="p-4 mt-4 border rounded-md shadow-md">
                            <textarea placeholder="typing..." className="border w-full rounded-md p-4 font-noto"/>
                            <button type="button" className="px-4 py-2 mt-2 ml-auto block tracking-wider text-white bg-green-400 hover:bg-green-500 font-noto font-bold rounded-md">Add</button>
                        </div>
                    </div>
                </div>

                {/*this below code should be mapped*/}
                <div className="w-1/5 px-3 pt-6">
                    <div className="border p-4 rounded-md shadow-md">

                    </div>
                </div>
            </div>
        );
    }
}

export default Trello;