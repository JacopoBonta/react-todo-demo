import React from 'react'

// function component that render an item
function Item(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Item