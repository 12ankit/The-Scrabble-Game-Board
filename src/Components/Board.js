import React,{Component} from 'react'
import Box from './Box.js';
import {connect} from 'react-redux'

class Board extends Component {
    onDragOver = (e) => {
        e.preventDefault()
    }
    render(){
        return (
            <div className="board">
                {(()=>{
                    let temp = []
                    for(let i=0;i<196;i++){
                        let isDraggable = this.props[i] ? true : false
                        temp[i]= <Box key={i} index={i} isDraggable={isDraggable} dropHandler={this.props.dropHandler}/>
                    }
                    return temp
                })()}
            </div>
        )
    }
}

export default connect(function(state,ownProps){
    return{
        ...state
    }
})(Board)