import React, {Component} from 'react';
const cheese = './maxWayImages/images/cheese.svg';
const pepper = './maxWayImages/images/pepper.svg';
const leaf = './maxWayImages/images/leaf.svg';
const fire = './maxWayImages/images/fire.svg';
const pizza1 = './maxWayImages/images/pitsa-1.svg';
const pizza2 = './maxWayImages/images/pitsa-2.svg';
const pizza3 = './maxWayImages/images/pitsa-3.svg';
const pizza4 = './maxWayImages/images/pitsa-4.svg';

class PitsaTabs extends Component {
    render() {

        const items = [];

        let pizzaTabs = {
            names: ['Gavaya', 'Mexica', 'Hot achchiko', 'Mexica', 'Apocalipo', 'Sosiskacho', 'Mexica'],
            prices: [45, 53, 64, 45, 64, 45, 53],
            ingredients: [cheese, pepper, leaf, '', pepper, leaf, ''],
            fire: [fire, fire, '', '', '', '',''],
            pizzas: [pizza1, pizza2, pizza3, pizza2, pizza3, pizza4, pizza2],
        };

        for (let i = 0; i < 7; i++) {
            items.push(
                <div className="w-1/2">
                    <div className={`border box-border hover:shadow-lg shadow-md bg-white overflow-hidden flex rounded-xl p-6 ${i % 2 !== 0 ? 'ml-4' : 'mr-4'} mb-8 hover:border-yellow-400`}>
                        <div className="mr-8 w-2/5 relative">
                            <img src={pizzaTabs.fire[i]} className={`${pizzaTabs.fire[i] === '' ? '' : 'absolute bg-gray-100 bg-opacity-70 top-0 left-0 p-4 rounded-full'}`} alt=""/>
                            <img src={pizzaTabs.pizzas[i]} className="w-full" alt=""/>
                        </div>
                        <div className="w-3/5 flex flex-wrap">
                            <h1 className="font-semibold text-3xl flex items-center">
                                <span className="mr-4">{pizzaTabs.names[i]}</span>
                                <img src={pizzaTabs.ingredients[i]} alt=""/>
                            </h1>
                            <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias corporis deleniti
                                doloremque doloribus officiis praesentium quas sapiente unde vitae.</p>
                            <div className="flex w-full justify-between items-center">
                                <h1 className="text-xl font-bold">{pizzaTabs.prices[i]},000 UZS</h1>
                                <button className="rounded-full bg-yellow-400 hover:bg-yellow-500 w-12 h-12 flex justify-center items-center text-white">
                                    <span className="icon icon-plus icon-w-14 icon-h-14 icon-white"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }



        return (
            <div>
                <h1 className="font-extrabold text-5xl tracking-widest mb-12">Pitsa</h1>
                <div className="flex flex-wrap mx-0 py-3 px-0">
                    {items}
                </div>
            </div>
        );
    }
}

export default PitsaTabs;