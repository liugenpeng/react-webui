import React , { Component } from 'react';
import { css , pureRender } from './enhance/index';
import createEnhance from './core/createEnhance';
import constant from './constant';
@createEnhance(css,pureRender)
export default class Col extends Component{
    static propTypes= {
        ComponentClass:React.PropTypes.string,
        width:React.PropTypes.string
    };
    static defaultProps = {
        width:"100",
        ComponentClass: 'div'
    };
   
    render=()=>{
        
        const {
            ComponentClass,
            className ,
            children ,
            width ,
            ...other 
        } = this.props; 

        let classes = {};
        let widthClassName = constant.COLS[width] ? constant.COLS[width] : constant["100"];
       
        return (
           <ComponentClass
                className={this.mergeClass(className,widthClassName)}
            {...other }>
                {children}
            </ComponentClass>
        );
    }
}
