import React, { Component } from 'react'

class MessageList extends Component {
      constructor (props) {

            super(props)

      }
      render() {
            return (
                  <div>
                        {this.props.messages.map(msg=>{
                              <span>{msg.text}</span>
                        })}
                  </div>
            )
      }
}

export default MessageList