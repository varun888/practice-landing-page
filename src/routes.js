import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { About } from "./about";
import { Banner } from "./banner";
import { Contact } from "./contact";
import Header from "./header";
import { Portfolio } from "./portfolio";
import { Services } from "./services";

export default function Routes() {
    return (
        <Router>
            <Header />
                <Route path="/" exact>
                    <Banner />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                
                
        </Router>
    );
}