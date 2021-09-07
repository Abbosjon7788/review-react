import React, {useState, useEffect} from 'react';

const CounterHooks = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        // componentDidMount va componentDidUpdate lar uchun ishlab beradi
        // document.title = number;
    });

    return (
        <div className="bg-white w-full overflow-hidden border rounded-lg">
            <h1 className="bg-gray-200 text-2xl font-noto font-bold text-center p-4 mb-4"> Counter Hooks </h1>
            <h3 className="font-bold text-4xl my-8 text-center"> {number} </h3>
            <div className="bg-yellow-50 border-t p-4 flex justify-between py-4">
                <button type="button" onClick={() => setNumber(number - 1)}
                        className="px-3 text-lg py-1 text-white bg-red-500 rounded-lg font-bold hover:bg-red-600"> -
                </button>
                <button type="button" onClick={() => setNumber(number + 1)}
                        className="px-3 text-lg py-1 text-white bg-green-500 font-bold rounded-lg hover:bg-green-600"> +
                </button>
            </div>

        </div>
    );
};

export default CounterHooks;