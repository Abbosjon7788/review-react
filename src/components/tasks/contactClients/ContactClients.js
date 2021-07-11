import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';

const ContactClients = () => {
    return (
        <div className="flex justify-center">
            <div className="w-3/4 flex">
                <div className="w-1/2 p-6">
                    <h1 className="uppercase font-bold text-gray-600 mb-8 font-serif text-xl">Give us a good news</h1>

                    <AvForm>
                        <AvField
                            name="userName"
                            type="text"
                            placeholder="Name"
                            className="w-full border-2 text-md font-sans rounded-md p-3 mb-4"
                            required
                        />
                        <AvField
                            name="userEmail"
                            type="email"
                            placeholder="Email"
                            className="w-full border-2 text-md font-sans rounded-md p-3 mb-4"
                            required
                        />
                        <AvField
                            name="userSubject"
                            type="text"
                            placeholder="Subject"
                            className="w-full border-2 text-md font-sans rounded-md p-3 mb-4"
                            required
                        />
                        <textarea
                            rows="7"
                            type="number"
                            placeholder="Your Message"
                            className="w-full border-2 text-md font-sans rounded-md p-3 mb-4"
                        />
                        <button type="submit"
                                className="border-2 border-green-400 rounded-md text-green-400 hover:text-green-600 hover:border-green-600 font-semibold px-4 py-1 cursor-pointer">SUBMIT
                        </button>
                    </AvForm>
                </div>
                <div className="w-1/2 p-6">
                    <h1 className="uppercase font-bold text-gray-600 mb-10 font-serif text-xl">Our happy clients</h1>
                    <div className="flex">
                        <div className="w-1/2 mr-4">
                            <h1 className="font-noto mb-8 uppercase font-extrabold tracking-widest text-2xl">Zara</h1>
                            <h1 className="font-noto mb-8 uppercase font-extrabold tracking-widest text-2xl">Zara</h1>
                            <h1 className="font-noto mb-8 uppercase font-extrabold tracking-widest text-2xl">Zara</h1>
                            <h1 className="font-noto mb-8 uppercase font-extrabold tracking-widest text-2xl">Zara</h1>
                            <h1 className="font-viaoda mb-8 capitalize font-extrabold tracking-widest text-2xl">Calvin Klein</h1>
                            <h1 className="font-viaoda mb-8 capitalize font-extrabold tracking-widest text-2xl">Calvin Klein</h1>
                            <h1 className="font-viaoda mb-8 capitalize font-extrabold tracking-widest text-2xl">Calvin Klein</h1>
                        </div>
                        <div className="w-1/2 ml-4">
                            <h1 className="font-yellowtail mb-8 uppercase font-extrabold tracking-widest text-2xl">Gucci</h1>
                            <h1 className="font-yellowtail mb-8 uppercase font-extrabold tracking-widest text-2xl">Gucci</h1>
                            <h1 className="font-yellowtail mb-8 uppercase font-extrabold tracking-widest text-2xl">Gucci</h1>
                            <h1 className="font-yellowtail mb-8 uppercase font-extrabold tracking-widest text-2xl">Gucci</h1>
                            <h1 className="font-shoulders mb-8 uppercase font-extrabold tracking-widest text-2xl">Mango</h1>
                            <h1 className="font-shoulders mb-8 uppercase font-extrabold tracking-widest text-2xl">Mango</h1>
                            <h1 className="font-shoulders mb-8 uppercase font-extrabold tracking-widest text-2xl">Mango</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactClients;