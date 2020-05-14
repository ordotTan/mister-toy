import React from 'react'
import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="app-header">
            <h1 className="fs30">Welcome to Mister-Toy!</h1>
            <NavLink activeClassName="selectedLink" exact to="/">Toy list</NavLink>
            <NavLink activeClassName="selectedLink" exact to="/toy/edit">Add Toy</NavLink>
            <NavLink activeClassName="selectedLink" exact to="/toy/stats">Store Statistics</NavLink>
            <NavLink activeClassName="selectedLink" exact to="/about">About</NavLink>
        </header>

    )
}