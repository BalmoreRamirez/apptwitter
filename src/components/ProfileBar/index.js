import React, { Component } from 'react'
import styles from './profilebar.css'

class ProfileBar extends Component {
      constructor(){
            super()
      }
      render(){
            return(
                  <div className="rootPb">
                  <figure>
                        <img  className="avatar" src={this.props.picture} />
                        <span className="username">Hola @ {this.props.username}</span>
                        <button onClick={this.props.onOpenText} className="button">
                        <span className="fa fal-lg fa-edit"></span>Tweet!
                        </button>
                  </figure>

                  </div>
            )
      }

}


export default ProfileBar