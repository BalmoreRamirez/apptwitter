import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'
class Main extends Component {
      constructor() {
            super()
            this.state = {
                  openText: false,
                  messages: [{
                        id: uuid(),
                        text: 'mensaje del tweet',
                        picture: 'https://pbs.twimg.com/profile_images/1136444373736906753/_I3AZ5s1_400x400.jpg',
                        displayName: 'Balmore Ramirez',
                        username: '@balmore',
                        date: Date.now() - 180000
                  }, {
                        id: uuid(),
                        text: 'mensaje del tweet',
                        picture: 'https://pbs.twimg.com/profile_images/1136444373736906753/_I3AZ5s1_400x400.jpg',
                        displayName: 'Balmore Ramirez',
                        username: '@balmore',
                        date: Date.now() - 1800000
                  }
                  ]
            }
            this.handleSendText = this.handleSendText.bind(this)
            this.handleCloseText = this.handleCloseText.bind(this)
            this.handleOpenText = this.handleOpenText.bind(this)

      }
      handleSendText (event){
            event.preventDefault()
            let newMessage = {
                  id: uuid(),
                  username: this.props.user.email.split('@'[0]),
                  displayName: this.props.user.displayName,
                  picture: this.props.user.photoURL,
                  date: Date.now(),
                  text: event.target.text.value
            }

            this.setState({
                  messages: this.state.messages.concat([newMessage]),
                  openText:false
            })
      }
      handleCloseText (event){
            event.preventDefault()
            this.setState({openText: false})
      }

      handleOpenText(event) {
            event.preventDefault()
            this.setState({ openText: true })
      }
      renderOpenText() {
            if (this.state.openText) {
                  return (
                      <InputText
                          onSendText={this.handleSendText}
                          onCloseText={this.handleCloseText.bind(this)}


                      />
                  )
            }
      }
      render() {
            return (
                  <div>
                        <ProfileBar
                              picture={this.props.user.photoURL}
                              username={this.props.user.email.split('@')[0]}
                              onOpenText={this.handleOpenText.bind(this)}
                        />
                        {this.renderOpenText()}
                        <MessageList messages={this.state.messages} />
                  </div>
            )
      }
}
export default Main