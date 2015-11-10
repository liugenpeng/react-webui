import React , { Component } from 'react';
import Image from '../../../src/image';
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            url:"http://react-bootstrap.github.io/assets/thumbnail.png"
        };
    }
    onClick=(e)=>{
       this.setState({
            url:"http://react-bootstrap.github.io/assets/thumbnail.png"
       });
    }
    render=()=>{
        return (
            <div>
                <Image ref="imgs" src={this.state.url}
                    title="xxx" onClick={::this.onClick} />
                
            </div>
        );
  }
} 
