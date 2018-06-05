import React, { Component } from 'react'

class ItemForm extends Component {
    constructor(props) {
        super(props)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(evt) {
        this.props.onTitleChange(evt.target.value)
    }

    handleDescriptionChange(evt) {
        this.props.onDescriptionChange(evt.target.value)
    }

    handleSubmit(evt) {
        this.props.onFormSubmit(evt)
        evt.preventDefault()
    }

    render() {
        return (
            <form className="Item-form" onSubmit={this.handleSubmit}>
                <input className="Item-form-controll"
                        name="title"
                        type="text"
                        placeholder="Title"
                        onChange={this.handleTitleChange}/>
                <input className="Item-form-controll"
                        name="desc"
                        type="text"
                        placeholder="Description"
                        onChange={this.handleDescriptionChange}/>
                <input type="submit" value="Add Item" />
            </form>
        )
    }
}

export default ItemForm