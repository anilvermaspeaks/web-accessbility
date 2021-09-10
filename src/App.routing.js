import {
    Switch,
    Route
} from "react-router-dom";

import Contact from './containers/contact/Contact';
import About from './containers/about/About';


function AppRouting() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>
    );
}


export default AppRouting;