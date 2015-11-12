import React , { Component } from 'react';
import { css , pureRender } from '../enhance/index';
import createEnhance from '../core/createEnhance';

/**
 * Header组件(导航栏)
 * author:LGP
 */
@createEnhance(css)
export default class Header extends Component{
    static propTypes = {
        title:React.PropTypes.string
    };
    render=()=>{
        const {
            className ,
            children ,
            title , 
            ...other 
        } = this.props; 
        //title组件
        const titleComponent = !title ? null : (
             <h1 className="title">{title}</h1>
        );
        return (
            <header className={this.mergeClass("bar bar-nav",className)} {...other}>
                 { children }
                 { titleComponent }
            </header>
        );
    }
}

