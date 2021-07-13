import React, {Component} from 'react';

const cheese = './maxWayImages/images/cheese.svg';
const pepper = './maxWayImages/images/pepper.svg';
const fire = './maxWayImages/images/fire.svg';
const burger = './maxWayImages/images/burger.svg';


class BurgerTabs extends Component {
    render() {
        const items = [];

        let burgerTabs = {
            names: ['Cheeseburger', 'Chili burger', 'Hamburger', 'Double burger'],
            prices: [23, 23, 23, 23],
            ingredients: [cheese, pepper, '', ''],
            fire: [fire, '', fire, ''],
            burgers: [burger, burger, burger, burger],
        };

        for (let i = 0; i < 4; i++) {
            items.push(
                <div className="xl:w-1/2 w-full xl:mx-0 mx-auto">
                    <div className={`border box-border hover:shadow-lg shadow-md bg-white overflow-hidden flex rounded-xl p-6 xl:${i % 2 !== 0 ? 'ml-4' : 'mr-4'} mb-8 hover:border-yellow-400`}>
                        <div className="mr-8 w-2/5 relative">
                            <img src={burgerTabs.fire[i]} className={`${burgerTabs.fire[i] === '' ? '' : 'absolute bg-gray-100 bg-opacity-70 top-0 left-0 p-4 rounded-full'}`} alt=""/>
                            <img src={burgerTabs.burgers[i]} className="w-full" alt=""/>
                        </div>
                        <div className="w-3/5 flex flex-wrap">
                            <h1 className="font-semibold text-3xl flex items-center">
                                <span className="mr-4">{burgerTabs.names[i]}</span>
                                <img src={burgerTabs.ingredients[i]} alt=""/>
                            </h1>
                            <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias corporis deleniti
                                doloremque doloribus officiis praesentium quas sapiente unde vitae.</p>
                            <div className="flex w-full justify-between items-center">
                                <h1 className="text-xl font-bold">{burgerTabs.prices[i]},000 UZS</h1>
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
            <div className="mb-16">
                <h1 className="font-extrabold text-5xl tracking-widest mb-12">Burger</h1>
                <div className="flex flex-wrap mx-0 py-3 px-0">
                    {items}
                </div>
            </div>
        );
    }
}

export default BurgerTabs;