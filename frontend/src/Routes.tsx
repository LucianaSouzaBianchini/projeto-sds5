import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
//import { Route, Switch } from "react-router";
//import { Routes } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//function NavBar() {
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;