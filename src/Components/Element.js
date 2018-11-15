import React, {Component} from "react"

export default class Element extends Component {
    onDragStart = (e) => {
        e.dataTransfer.setData("letter",this.props.letter);
    }
    render(){
        return (
            <div className="letter" 
            id={this.props.letter} 
            unselectable="on"
            draggable={true}
            onDragStart={this.onDragStart}>
                {this.props.letter}
            </div>
        )
    }
}