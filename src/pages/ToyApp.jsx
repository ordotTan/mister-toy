import { loadToys, removeToy, saveToy, saveFilter, toggleLoad } from '../store/actions/toyActions.js'

import ToyList from '../cmps/ToyList'
import ToyFilter from '../cmps/ToyFilter'
import React from 'react';


import {connect} from "react-redux";
import {Link} from "react-router-dom";


class ToyApp extends React.Component {

    componentDidMount() {
        this.props.loadToys(this.props.filter, true)
            .then(() => { this.props.toggleLoad(false) })
    }

    componentDidUpdate(prevProps) { // To properly apply changing the filter
        if (this.props.filter !== prevProps.filter)
            this.props.loadToys(this.props.filter, true)
                .then(() => { this.props.toggleLoad(false) })
    }

    onSetFilter = (filter) => { 
        this.props.saveFilter(filter)
    }

    onDeleteToy = (toyId) => {
        this.props.removeToy(toyId)
    }

    render() {
    
        const { isLoading,toys } = this.props
        return (
            <section className="toy-app">
                <ToyFilter onSetFilter={this.onSetFilter} />
                <Link className="add-toy-link" to="/toy/edit">Add Toy</Link>
                <Link to="/toy/stats">Store Statistics</Link>
                {isLoading && <h2>Loading...</h2>}
                {!isLoading && toys &&  <ToyList onDeleteToy={this.onDeleteToy} toys={this.props.toys} />}
            </section>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        toys: state.toyApp.toys,
        filter: state.toyApp.currFilter,
        isLoading: state.toyApp.isLoading
    }
}

const mapDispatchToProps = {
    loadToys,
    removeToy,
    saveToy,
    saveFilter,
    toggleLoad
}


export default ToyApp = connect(mapStateToProps,mapDispatchToProps)(ToyApp)