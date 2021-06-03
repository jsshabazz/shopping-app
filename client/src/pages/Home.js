import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
              <h1>Please Login or Signup</h1> 
              <a href="/login"><button>Login</button></a>
             <a href="/singup"><button>Signup</button></a>
              
            </div>
        )
    }
}
