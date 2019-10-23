import react from "react";
import { BrowserRouter, Route, Swicth,Redirect } from "react-router-dom";

const Router = () => (

    <BrowserRouter>

        <switch>

            <Route exact path = "/" component = {() => <h1> HW </h1>}/>

        </switch>

    </BrowserRouter>

);

export default Routes;