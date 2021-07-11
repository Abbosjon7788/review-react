import React from 'react';
import {Link} from "react-router-dom";

const Tasks = () => {

    let tasks = [
        {link: "contact-clients", title: "Contact Clients"},
        {link: "hamburger-price", title: "Hamburger Price"},
        {link: "share-item", title: "Share Item"},
        {link: "array-function", title: "Array Function"},
        {link: "change-modal", title: "Change Modal"},
        {link: "responsive-navbar", title: "Responsive Navbar"},
    ];

    return (
        <div className="flex flex-wrap flex-row">
            {tasks.map((element) => (
                <div className="w-1/6 px-4">
                    <Link to={`/tasks/${element.link}`}
                          className="px-4 mb-8 text-center py-1 rounded-lg border-2 block hover:text-blue-600 hover:border-blue-600 hover:bg-yellow-100">{element.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Tasks;