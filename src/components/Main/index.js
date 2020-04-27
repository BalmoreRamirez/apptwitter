import React, { Component } from 'react'
import MessageList from '../MessageList'
class Main extends Component {
      constructor() {
            super()
            this.state = {
                  messages: []
            }
      }
      render() {
            return (

                  //componente hijo y un pronts
                  <MessageList messages={this.state.messages} />
            )
      }
}

export default Main