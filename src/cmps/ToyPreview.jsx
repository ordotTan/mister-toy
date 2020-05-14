
import React from 'react'
import { Link } from "react-router-dom";



export default function ToyPreview(props) {
    const { name, price, type, inStock, imgURL } = props.toy
    let inStockDisplay
    if (!inStock || inStock === 'false') inStockDisplay = 'N/A'
    else inStockDisplay = 'Sale'
    let imgSRC = imgURL ? imgURL : "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
    return (
        <article className="toy-item">
            <div className="toy-content">
                <h3 className="toy-name">{name}</h3>
                <h3>Price: {price}$</h3>
                <h3>{type}</h3>
                <h3>{inStockDisplay}</h3>
                <img className="toy-thumb" src={imgSRC} alt=""></img>
            </div>
            <div className="toy-actions flex column">
                <button className="delete-button" onClick={() => props.onDeleteToy(props.toy._id)}>Delete</button>
                <Link to={`/toy/edit/${props.toy._id}`}>Edit Toy</Link>
                <Link to={`/toy/${props.toy._id}`}> Details</Link>
            </div>
        </article>
    )
}