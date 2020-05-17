import React, { Component } from 'react'

import styles from './message-list.css'
import Message from '../Message'
class MessageList extends Component {
      constructor(props) {
            super(props.props)
      }
      render() {
            return (
                  <div className="root">
                        {this.props.messages.map(msg => {
                              return (
                                   <Message 
                                   key={msg.id}
                                   text={msg.text}
                                   picture={msg.picture}
                                   displayName={msg.displayName}
                                   username={msg.username}
                                   date={msg.date}
                                    />
                              )
                        }).reverse()
                        }
                  </div>
            )
      }
}

export default MessageList