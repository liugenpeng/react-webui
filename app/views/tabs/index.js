import React , { Component } from 'react';

import Tabs from '../../../src/tabs/Tabs';
import Tab from '../../../src/tabs/Tab';
import Header from '../../../src/header/Header';
import HeaderItem from '../../../src/header/HeaderItem';
import Footer from '../../../src/footer/Footer';
import FooterItem from '../../../src/footer/FooterItem';
import ReactGestures from 'react-gestures';
export default class Home extends Component {
    constructor(){
       super();
       this.state={
          activeKey:"1"
       }
    }
    onTabChange=(key)=>{
     
    }
    onSwipeLeft=()=>{
        alert("x11x");
    }
    render=()=>{
        let { activeKey } = this.state;
        return (
           <div className="page">
            <Header title="绩效绩效绩效绩效绩">
                <HeaderItem text="返回" icon="left" link position="left" />
                <HeaderItem text="菜单" position="right" />
            </Header>
            <Footer>
                <FooterItem text="返回"  active />
                <FooterItem text="菜单1" />
            </Footer>
            <div className="content">
                <Tabs activeKey={activeKey} onTabChange={::this.onTabChange}>
                    <Tab key="1" title="全部">
                        
                            <div>这是全部的标签页</div>
                       
                      
                    </Tab>
                    <Tab key="2" title="未付款" >这是未付款的标签页</Tab>
                    <Tab key="3" title="已付款">这是已付款的标签页</Tab>
                </Tabs>
            </div>
           
           </div>
        );
  }
} 
