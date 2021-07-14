import React, {Component} from 'react';
import './styles/main.scss';
import NavigationBar from "./maxWayComponents/navigationBar/NavigationBar";
import MainView from "./maxWayComponents/mainView/MainView";
import Tabs from "./maxWayComponents/tabs/Tabs";
import Footer from "./maxWayComponents/footer/Footer";
import FooterContact from "./maxWayComponents/footerContact/FooterContact";

class MaxWay extends Component {
    render() {
        return (
            <div className="lg:py-0 py-6 bg-gray-100">
                <NavigationBar/>
                <MainView/>
                <Tabs/>
                <Footer/>
                <FooterContact/>
            </div>
        );
    }
}

export default MaxWay;