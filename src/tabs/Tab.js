import React , { Component , PropTypes } from 'react';
import { css , pureRender } from '../enhance/index';
import createEnhance from '../core/createEnhance';

@createEnhance(css)
export default class Tab extends Component{
    static displayName = "Tab";
    static propTypes = {
       onDestroy: PropTypes.func,
    };
    componentWillUnmount=()=>{
        const { onDestroy } = this.props;
        onDestroy && onDestroy();
    }
    render=()=>{
        const {  
            title ,
            disabled , 
            active ,
            className, 
            children , 
            ...other
        } = this.props;
       
        return (
            <div {...other} className={this.mergeClass("tab",{active},className)}>
                <div className="content-block">
                    { children }
                </div>
            </div>
        );
    }
   
}
