import React , { Component } from 'react';
import { css , pureRender } from './enhance/index';
import createEnhance from './core/createEnhance';

@createEnhance(css,pureRender)
export default class Row extends Component{
    static propTypes= {
        componentClass:React.PropTypes.string
    };
    static defaultProps = {
        componentClass: 'div'
    };
   
    render=()=>{
        
        const {
            ComponentClass,
            className ,
            children ,
            ...other 
        } = this.props; 
        
        return (
           <ComponentClass
                className={this.mergeClass(className,'row')}
            {...other }>
                {children}
            </ComponentClass>
        );
    }
}
