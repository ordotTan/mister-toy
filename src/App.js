import React from 'react';
import ToyApp from './pages/ToyApp'
import ToyEdit from './pages/ToyEdit'
import ToyDetails from './pages/ToyDetails'
import ToyStats from './pages/ToyStats'
import About from './pages/About'
import AppHeader from './cmps/AppHeader'
// import PopUp from './cmps/PopUp'

import './styles/global.scss';

import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";


class App extends React.Component {
    render() {
        return (
            <section className="toy-app">
                <AppHeader />
                {/* <PopUp/> */}
                <Switch>
                    <Route exact component={ToyStats} path="/toy/stats" />
                    <Route exact component={ToyEdit} path="/toy/edit/:id?" />
                    <Route exact component={ToyDetails} path="/toy/:id" />
                    <Route exact component={About} path="/about" />
                    <Route exact component={ToyApp} exact path="/" />
                </Switch>
            </section>
        )
    }
}

export default connect()(App)
