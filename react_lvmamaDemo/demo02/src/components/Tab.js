import React,{Component} from 'react'

class Tab extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.state = {
            index:0
        }
    }
    tabChange(e){
        this.state.index = e;
        if(this.state.index === e){
            this.setState({
                index:this.state.index
            })
        }
    }
    render() { 
        return ( <div className='tab-box'>
                <ul className='tab'>
                    <li onClick={this.tabChange.bind(this,0)}>Tab1</li>
                    <li onClick={this.tabChange.bind(this,1)}>Tab2</li>
                    <li onClick={this.tabChange.bind(this,2)}>Tab3</li>
                </ul>
                <div className='conter'>
                    <div style={{display:(this.state.index === 0) ?'block' : 'none'}}>Center1</div>
                    <div style={{display:(this.state.index === 1) ?'block' : 'none'}}>Center2</div>
                    <div style={{display:(this.state.index === 2) ?'block' : 'none'}}>Center3</div>
                </div>
        </div> );
    }
}
 
export default Tab;