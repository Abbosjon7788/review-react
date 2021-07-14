import React, {Component} from 'react';

class ArrayFunction extends Component {
render() {
    let companies = ["PDP", "ECMA", "Apple", "Samsung", "AIF"];

    const exampleForEach = () => {
        companies.forEach((element, index, array) => {
            // console.log(element + " " + index);
            console.log(array);
        })
    };

    let companiesObject = companies.map((element, index) => {
        return {name: element, number: index}
    });

    console.log(companiesObject);

    let numbers = [200, 300, 489, 501, 159];

    // let newNumber = numbers.filter((element) => {
    //     return element > 200;
    // });

    let newNumber = numbers.filter((element) => element > 200);//this is same above code and return array
    console.log(newNumber);

    let newSortedNumbers = numbers.sort((item1, item2) => {
        return item2 - item1;
    });
    console.log("Sorted numbers: " + newSortedNumbers);

    return (
        <div className="p-8 bg-red-200 rounded-lg">
            <button type="button"
                    className="py-2 px-4 rounded-lg bg-green-300 hover:bg-green-400 text-white font-semibold text-xl"
                    onClick={() => {exampleForEach()}}>Click me! (look console)
            </button>
        </div>
    );
}
}

export default ArrayFunction;