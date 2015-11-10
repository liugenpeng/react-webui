import React , { Component } from 'react';
import { css , pureRender } from './enhance/index';
import createEnhance from './core/createEnhance';
import constant from 'constant';
@createEnhance(css,pureRender)
export default class Col extends Component{
    static propTypes= {
        componentClass:React.PropTypes.string,
        col:React.PropTypes.number
    };
    static defaultProps = {
        col:50
        componentClass: 'div'
    };
   
    render=()=>{
        
        const {
            ComponentClass,
            className ,
            children ,
            ...other 
        } = this.props; 

        let classes = {};
        
        return (
           <ComponentClass
                className={this.mergeClass(className,'col-')}
            {...other }>
                {children}
            </ComponentClass>
        );
    }
}
