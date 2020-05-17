import React, { Component } from 'react'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {

  constructor(){
    super()
    this.state={
      user:{
        photoURL:'https://pbs.twimg.com/profile_images/1136444373736906753/_I3AZ5s1_400x400.jpg',
        email: 'jose@gmail.com',
        displayName: 'jose medrano'
      }
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>
    );
  }
}
export default App
