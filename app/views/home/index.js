import React , { Component } from 'react';
import Header from '../../../src/header/Header';
import HeaderItem from '../../../src/header/HeaderItem';
import Footer from '../../../src/footer/Footer';
import FooterItem from '../../../src/footer/FooterItem';
export default class Home extends Component {
    constructor(){
        super();
        
    }
    render=()=>{
        return (
           <div>
             <Header title="绩效绩效绩效绩效绩">
                <HeaderItem text="返回" icon="left" link position="left" />
                <HeaderItem text="菜单1" position="right" />
            </Header>
            <Footer>
                <FooterItem text="返回" icon="home"  disabled/>
                <FooterItem text="菜单1"  active />
            </Footer>
           </div>
        );
  }
} 
