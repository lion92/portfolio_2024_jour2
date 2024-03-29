import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helloword from "./Component/Helloword";
import About from "./Component/About";
import ListProjets from "./Component/ListProjets";
import CarteVisite from "./Component/CarteVisite";
import Timeline from "./Component/Timeline";


const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Helloword}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Projets" component={ListProjets}/>
            <Route exact path="/Parcours" component={Timeline}/>
            <Route exact path="/Contact" component={CarteVisite}/>

        </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




