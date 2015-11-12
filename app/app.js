import React , { Component } from 'react';
require("../less/all.less");
export default class App extends Component{
    render=()=>{
      return (
         <div>
             {this.props.children}
         </div>
      );
    }
}
