import React, { Component } from 'react'
import Slide from './Slide.js'
import Tab from './Tab.js'
import MyEditor from './Editor.js'
import './style.less'
class App extends Component {
   
    render() {
        return (
            <div>
                <Slide />
                <Tab />
                <MyEditor />
            </div>);
    }
}

export default App;