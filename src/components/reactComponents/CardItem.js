import React from 'react';
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";

const CardItem = (props) => {
    // console.log(props);
    return (
        <Card className="bg-white border border-gray-300 rounded-lg border">
            <CardHeader className="p-4 bg-gray-100 border-b border-gray-300">
                <h3 className="text-xl font-bold font-noto">{props.title}</h3>
            </CardHeader>
            <CardBody className="p-4">
                <p className="font-serif">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae blanditiis deserunt dolores
                    esse excepturi odit perferendis ratione sunt.</p>
            </CardBody>
            <CardFooter className="border-t border-gray-300 p-4 bg-gray-100">
                <button type="button" className="px-4 py-2 font-semibold bg-green-300 text-white rounded-lg hover:bg-green-400">Click
                    me!
                </button>
            </CardFooter>
        </Card>
    );
};

export default CardItem;