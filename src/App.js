import React from 'react';
import ToyApp from './pages/ToyApp'
import ToyEdit from './pages/ToyEdit'
import ToyDetails from './pages/ToyDetails'
import ToyStats from './pages/ToyStats'
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
                    <Route component={ToyStats} path="/toy/stats" />
                    <Route component={ToyEdit} path="/toy/edit/:id?" />
                    <Route component={ToyDetails} path="/toy/:id" />
                    <Route component={ToyApp} exact path="/" />
                </Switch>
            </section>
        )
    }
}

export default connect()(App)
