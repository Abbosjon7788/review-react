import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Wrap from "./components/reactComponents/Wrap";
import Home from "./components/home/Home";
import Tasks from "./components/tasks/Tasks";
import ContactClients from "./components/tasks/contactClients/ContactClients";
import ResponsiveComponent from "./components/responsiveComponent/ResponsiveComponent";
import HamburgerPrice from "./components/tasks/hanburgerPrice/HamburgerPrice";
import ShareItem from "./components/tasks/shareItem/ShareItem";
import ProductPage from "./components/productPage/ProductPage";
import ArrayFunction from "./components/productPage/ArrayFunction";
import MaxWay from "./components/maxWay/MaxWay";
import ChangeModal from "./components/tasks/changeModal/ChangeModal";
import ResponsiveNavbar from "./components/tasks/responsiveNavbar/ResponsiveNavbar";

function App() {
    return (
        <>
            <BrowserRouter>
                {/*<Navigation/>*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/react-components" component={Wrap}/>
                    <Route exact path="/responsive-component" component={ResponsiveComponent}/>
                    <Route exact path="/product-page" component={ProductPage}/>
                    <Route exact path="/max-way" component={MaxWay}/>
                    <Route exact path="/tasks" component={Tasks}/>
                    <Route exact path="/tasks/contact-clients" component={ContactClients}/>
                    <Route exact path="/tasks/hamburger-price" component={HamburgerPrice}/>
                    <Route exact path="/tasks/share-item" component={ShareItem}/>
                    <Route exact path="/tasks/array-function" component={ArrayFunction}/>
                    <Route exact path="/tasks/change-modal" component={ChangeModal}/>
                    <Route exact path="/tasks/responsive-navbar" component={ResponsiveNavbar}/>
                </Switch>

            </BrowserRouter>
        </>
    );
}

export default App;
