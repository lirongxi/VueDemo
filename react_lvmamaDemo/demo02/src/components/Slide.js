import React, { Component } from 'react'
import './style.less'
class Slide extends Component {
    state = {}
    constructor(props) {
        super(props)
        this.state = {
            list: [0, 1, 2, 3, 4],
            index: 0
        }
        this.IndexChange = this.IndexChange.bind(this);
        this.add = (e) => {
            console.log(e.target)
        }
    }
    IndexChange() {
        if (this.state.index === this.state.list.length - 1) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
            // console.log(this.state.index)
        }
    }
    BtnChange=()=>{
        console.log(1)
    }
    componentDidMount() {
        setInterval(() => {
            this.IndexChange();
        }, 2000)
        // document.getElementsByClassName('box')[0].children[0].children[0].style.display = 'block';
    }
    render() {
        let liData = this.state.list;
        let stateIndex = this.state.index;
        return (
            <div className='box'>
                <ul className='img'>
                    {liData.map((item, index) => {
                        return (<li style={{ display: (index === stateIndex) ? "block" : "none" }} key={index}>{item}</li>)
                    })
                    }
                </ul>
                <ul className='btn'>
                    <li onMouseMove={this.BtnChange}></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>);
    }
}

export default Slide;