import React from 'react';
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="mx-20 py-10">
            <Nav className="flex items-center">
                <NavItem className="mr-4">
                    <Link to="/"><span className="font-extrabold text-xl font-sans uppercase tracking-wider">Logo</span></Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/react-components">React Components</Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/trello">Trello</Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/product-page">Product Page</Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/max-way">Max Way</Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/to-do-list">To Do List</Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/flickr">Flickr</Link>
                </NavItem>
                <NavItem className="px-2 py-1 mr-4 border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/life-cycle-methods">Life Cycle Methods</Link>
                </NavItem>
                <NavItem className="px-2 py-1 ml-auto border-2 hover:bg-yellow-100 hover:text-red-600 hover:border-red-600 cursor-pointer rounded-lg">
                    <Link to="/tasks">Tasks</Link>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Navigation;