import React from 'react'
import arrow from './arrow.png'

class TextInput extends React.Component {
    render(){
        return (<div className="text-input">
            <input placeholder=" type a message..."/>
            <button>
            <img src={arrow} className="arrow" alt=""/>
            </button>
        </div>)
    }
}

export default TextInput