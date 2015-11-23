import React , { Component } from 'react';
import Button from '../../../src/Button';
import ButtonRow from '../../../src/ButtonRow';
import Header from '../../../src/header/Header';
import HeaderItem from '../../../src/header/HeaderItem';
import Footer from '../../../src/footer/Footer';
import FooterItem from '../../../src/footer/FooterItem';
export default class Home extends Component {
 
    render=()=>{
        return (
           <div>
           <Button  round fill >按钮</Button>
           <Button  round fill color="success">按钮</Button>
           <Button  round  disabled>按钮</Button>
           <ButtonRow >
                <Button active>全部活动</Button>
                <Button >与我相关</Button>
                <Button >其他</Button>
           </ButtonRow>
             {/*<Header title="绩效绩效绩效绩效绩">
                <HeaderItem text="返回" icon="left" link position="left" />
                <HeaderItem text="菜单1" position="right" />
            </Header>
            <Button>xxx</Button>
            <Footer>
                <FooterItem text="返回" icon="home"  disabled/>
                <FooterItem text="菜单1"  active />
            </Footer>
            */}
           </div>
        );
  }
} 
