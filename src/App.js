import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Wrap from "./components/reactComponents/Wrap";
import Home from "./components/home/Home";
import Tasks from "./components/tasks/Tasks";
import ContactClients from "./components/tasks/contactClients/ContactClients";
import Trello from "./components/trello/Trello";
import HamburgerPrice from "./components/tasks/hanburgerPrice/HamburgerPrice";
import ShareItem from "./components/tasks/shareItem/ShareItem";
import ArrayFunction from "./components/productPage/ArrayFunction";
import MaxWay from "./components/maxWay/MaxWay";
import NewModal from "./components/tasks/changeModal/newModal/NewModal";
import OpenModal from "./components/tasks/changeModal/modal/OpenModal";
import ResponsiveNavbar from "./components/tasks/responsiveNavbar/ResponsiveNavbar";
import ProductPage from "./components/productPage/ProductPage";
import ToDoList from "./components/toDoList/ToDoList";
import Flickr from "./components/flickr/Flickr";
import LifeCycleMethods from "./components/lifeCycleMethods/LifeCycleMethods";
import Users from "./components/lifeCycleMethods/users/Users";
import Photos from "./components/lifeCycleMethods/photos/Photos";
import Employee from "./components/lifeCycleMethods/employee/Employee";
import Posts from "./components/lifeCycleMethods/posts/Posts";
import PostView from "./components/lifeCycleMethods/posts/PostView";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/react-components" component={Wrap}/>
                    <Route exact path="/trello" component={Trello}/>
                    <Route exact path="/product-page" component={ProductPage}/>
                    <Route exact path="/max-way" component={MaxWay}/>
                    <Route exact path="/to-do-list" component={ToDoList}/>
                    <Route exact path="/flickr" component={Flickr}/>
                    <Route exact path="/life-cycle-methods" component={LifeCycleMethods}/>
                    <Route exact path="/life-cycle-methods/users" component={Users}/>
                    <Route exact path="/life-cycle-methods/photos" component={Photos}/>
                    <Route exact path="/life-cycle-methods/employee" component={Employee}/>
                    <Route exact path="/life-cycle-methods/posts" component={Posts}/>
                    <Route exact path="/life-cycle-methods/posts/:id" component={PostView}/>
                    <Route exact path="/tasks" component={Tasks}/>
                    <Route exact path="/tasks/contact-clients" component={ContactClients}/>
                    <Route exact path="/tasks/hamburger-price" component={HamburgerPrice}/>
                    <Route exact path="/tasks/share-item" component={ShareItem}/>
                    <Route exact path="/tasks/array-function" component={ArrayFunction}/>
                    <Route exact path="/tasks/change-modal" component={NewModal}/>
                    <Route exact path="/tasks/react-hooks-modal" component={OpenModal}/>
                    <Route exact path="/tasks/responsive-navbar" component={ResponsiveNavbar}/>
                </Switch>

            </BrowserRouter>
        </>
    );
}

export default App;
