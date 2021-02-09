import React, { Component } from 'react'
import PrimarySearchAppBar from './Navbar'

export default class WelcomePage extends Component {
    render() {
        return (
            <div className="welcomePage">
                <PrimarySearchAppBar/>
                <img src="https://www.testyantra.com/sites/default/files/tylog1.png" alt="" className="imageposition"></img>
            </div>
        )
    }
}
