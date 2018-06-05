import React, { Component } from "react";
import Item from './Item'

class ItemList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        this.itemsList = this.props.list.map((item, index) => {
            return (
                <li key={index}>
                    <Item title={item.title} description={item.description} />  
                </li>
            )
        })
        return (
            <ul className="Item-list">
                {this.itemsList}
            </ul>
        )
    }
}

export default ItemList