import React , { Component } from 'react';
import { css , pureRender } from '../enhance/index';
import createEnhance from '../core/createEnhance';
/**
 * Foote导航
 */
@createEnhance(css)
export default class Footer extends Component{
   
    render=()=>{
        const {
            className ,
            children ,
          
            ...other 
        } = this.props; 
       
        return (
            <nav className={this.mergeClass("bar bar-tab",className)} {...other}>
                 { children }
            </nav>
        );
    }
}
