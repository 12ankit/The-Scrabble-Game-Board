import React, { Component } from "react"
import { connect } from "react-redux"

class Box extends Component {
    onDragOver = (e) => {
        e.preventDefault()
    }
    onDrop = (e) => {
        this.props.dropHandler(e)
    }
    onDragStart = (e) => {
        e.dataTransfer.setData("divIndex" , e.target.id)
        e.dataTransfer.setData("innerText" , e.target.innerText)
    }
    render() {
        return (
            <div className="box" id={this.props.index}
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                unselectable="on"
                draggable={this.props.isDraggable}
                onDragStart={this.onDragStart}>
                {this.props.index || this.props.index==0 ? this.props[this.props.index] : ""}
            </div>
        )
    }
}

export default connect(function (state, ownProps) {
    return {
        ...state
    }
})(Box)