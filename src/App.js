import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Element from "./Components/Element.js"
import Board from './Components/Board';

class App extends Component {
  onDragOver = (e) => {
    e.preventDefault()
  }
  onDrop = (e) => {
    e.preventDefault()
    if (e.target.className === "App") {
      let index = e.dataTransfer.getData("divIndex")
      let innerText = e.dataTransfer.getData("innerText", e.target.innerText)
      if (!isNaN(parseInt(index)) && innerText) {
        this.props.dispatch({
          type: "REMOVE_ELEMENT",
          data: index
        })
      }
    }
    let id = e.dataTransfer.getData("letter")
    if (id !== "") {
      this.props.dispatch({
        type: "ADD_ELEMENT",
        data: {
          id: id,
          divIndex: e.target.id
        }
      })
    }
  }
  render() {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let temp = []
    for (let i = 0; i < alphabets.length; i++) {
      temp[i] = alphabets[i]
    }
    return (
      <div className="App" onDragOver={this.onDragOver} onDrop={this.onDrop}>
        <Board dropHandler={this.onDrop}/>
        <div className="elements">
          {temp.map((letter, index) => {
            return <Element key={index} letter={letter} isDraggable={true} />
          })}
        </div>
      </div>
    );
  }
}

export default connect(function (state, props) {
  return {
    ...state
  }
})(App);
