import React, {Component} from 'react';
import './trello.scss';

class Trello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            database: [],
            boardTitle: '',
            selectedIndex: -1,
            itemTitle: []
        };
    }


    render() {

        const openBoard = () => {
            this.setState({isOpen: !this.state.isOpen});
        };

        const handleChange = (event) => {
            this.setState({boardTitle: event.target.value});
        };

        const addBoard = () => {
            if (this.state.selectedIndex >= 0) {
                this.state.database[this.state.selectedIndex].title = this.state.boardTitle;
            } else {
                this.state.database.push({
                    title: this.state.boardTitle,
                    item: []
                });
            }

            openBoard();

            this.setState({database: this.state.database, boardTitle: '', selectedIndex: -1});

        };

        const deleteCard = (index) => {
            this.state.database.splice(index, 1);
            this.setState({database: this.state.database});
        };

        const editTitle = (index) => {
            this.setState({boardTitle: this.state.database[index].title, isOpen: true, selectedIndex: index});
        };

        const handleChangeItem = (event, index1) => {
            this.state.itemTitle[index1] = event.target.value;
            this.setState({itemTitle: this.state.itemTitle});

            console.log('item-title: ' + this.state.itemTitle);
            console.log('target: ' + event.target.value);
        };

        const addItem = (index) => {
            if (this.state.selectedIndex >= 0) {

                this.state.database[index].item[this.state.selectedIndex] = this.state.itemTitle[index];

            } else {
                this.state.database[index].item.push(this.state.itemTitle[index]);
                this.setState({item: this.state.database[index].item});
            }
            this.setState({item: this.state.database[index].item[this.state.selectedIndex]});

            this.state.itemTitle[index] = '';
            this.setState({itemTitle: this.state.itemTitle, selectedIndex: -1});
        };

        const deleteItem = (index1, index2) => {
            console.log('index1: ' + index1);
            console.log('index2: ' + index2);
            this.state.database[index1].item.splice(index2,1);
            this.setState({item: this.state.database[index1].item});
        };

        const editItemTitle = (index1, index2) => {
            this.state.selectedIndex = index2;
            this.setState({selectedIndex: this.state.selectedIndex});
            this.state.itemTitle[index1] = this.state.database[index1].item[index2];
            this.setState({itemTitle: this.state.itemTitle});
        };


        return (
            <div className="flex flex-wrap mx-20 my-10">
                <div className="w-1/5 px-3 pt-6">
                    <div>
                        <button type="button" onClick={openBoard}
                                className="rounded-md px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-bold tracking-widest font-serif">Add board
                        </button>
                        <div
                            className={`${this.state.isOpen ? 'block' : 'hidden'} p-4 mt-4 border rounded-md shadow-md`}>

                            <textarea placeholder="typing..." name="text" onChange={handleChange}
                                      value={this.state.boardTitle}
                                      className="border w-full rounded-md p-4 font-noto"/>
                            <button type="button" onClick={addBoard}
                                    className="px-4 py-2 mt-2 ml-auto block tracking-wider text-white bg-green-400 hover:bg-green-500 font-noto font-bold rounded-md">Add
                            </button>
                        </div>
                    </div>
                </div>

                {/*this below code should be mapped*/}
                {
                    this.state.database.map((element1, index1)=>(
                        <div className="w-1/5 px-3 pt-6">
                            <div className="border relative p-4 rounded-md shadow-md">
                                <div className="p-4 bg-gray-100 mb-4 flex rounded-md">
                                    <h1 onClick={()=>editTitle(index1)} className="font-noto font-bold text-xl tracking-widest">{element1.title}</h1>
                                    <span onClick={()=>deleteCard(index1)}
                                        className="absolute cancel-shadow border border-gray-400 text-gray-400 bg-white hover:bg-gray-100 rounded-full border-black w-5 h-5 text-xs flex items-center justify-center -right-1.5 -top-1.5 hover:text-red-600 hover:border-red-600 font-extrabold cursor-pointer">&#10005;</span>
                                </div>

                                {/*this below code should be mapped*/}
                                {
                                    element1.item.map((element2,index2)=>(
                                        <div className="relative pb-4">
                                            <span onClick={()=>editItemTitle(index1, index2)} className="w-full block border-2 hover:border-blue-400 shadow-lg p-1 rounded-md">{element2}</span>
                                            <span onClick={()=>deleteItem(index1, index2)} className="absolute border cancel-shadow border-gray-400 text-gray-400 bg-white hover:bg-gray-100 rounded-full border-black w-5 h-5 text-xs flex items-center justify-center -right-1 -top-1 hover:text-red-600 hover:border-red-600 font-extrabold cursor-pointer">&#10005;</span>
                                        </div>
                                    ))
                                }

                                <div className="bg-gray-100 p-4 mt-4 rounded-md">
                                    <textarea onChange={(event)=>handleChangeItem(event, index1)} value={this.state.itemTitle[index1]} placeholder="typing..." className="border w-full text-sm rounded-md p-3 font-noto"/>
                                    <button type="button" onClick={()=>addItem(index1)} className="px-3 py-1 mt-2 ml-auto block tracking-wider text-white text-sm bg-green-400 hover:bg-green-500 font-noto font-bold rounded-md">Add</button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        );
    }
}

export default Trello;