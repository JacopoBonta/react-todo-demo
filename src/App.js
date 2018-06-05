import React, { Component } from 'react';
import './App.css';

// fake data
import itemsList from './res/items'

// import components
import ItemList from './components/ItemList'
import ItemForm from './components/ItemForm'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      list: itemsList,
      title: ``,
      description: ``
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleTitleChange(title) {
    this.setState({title: title})
  }

  handleDescriptionChange(description) {
    this.setState({description: description})
  }

  handleFormSubmit() {
    const title = this.state.title
    const description = this.state.description
    console.log("lol")
    if (title && description) {
      this.setState(prevState => {
        let list = prevState.list
        list.unshift({
          title: title,
          description: description
        })
        return {
          list: list,
          title: ``,
          description: ``
        }
      })
    }
  }
  
  render() {
    const list = this.state.list
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>
        <ItemForm onTitleChange={this.handleTitleChange}
                  onDescriptionChange={this.handleDescriptionChange}
                  onFormSubmit={this.handleFormSubmit} />
        <hr />
        <ItemList list={list} />
      </div>
    );
  }
}

export default App;