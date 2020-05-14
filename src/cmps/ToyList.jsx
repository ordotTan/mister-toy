import React from 'react'
import ToyPreview from './ToyPreview.jsx'


export default function ToyList(props) {
    return (
        <div className="toy-list flex wrap justify-center">
            {props.toys.map(toy => {
                return <ToyPreview onDeleteToy={props.onDeleteToy} key={toy._id} toy={toy}/>
                }      
            )}
        </div>
    )
}