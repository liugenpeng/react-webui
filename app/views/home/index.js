import React , { Component } from 'react';
import NavBar from '../../../src/nav/NavBar';
import NavItem from '../../../src/nav/NavItem';
export default class Home extends Component {
    constructor(){
        super();
        
    }
    render=()=>{
        return (
            <NavBar title="绩效绩效绩效绩效绩">
                <NavItem text="返回" icon="left" link position="left" />
                <NavItem text="菜单1" position="right" />
            </NavBar>
        );
  }
} 
