import React , { Component , PropTypes } from 'react';
import { css,pureRender } from './enhance/index';
import createEnhance from './core/createEnhance'

@createEnhance(css)
export default class ButtonRow extends Component{
    static displayName = "ButtonRow";
    render=()=>{
        const {   
            className , 
            children , 
            round , 
            color ,
            big ,
            ...other
        } = this.props;

        let cloneProps = {
            fill:false,
            big:big,
            color,
            round
        };
        let buttons = React.Children.map(children,(button)=>{
            return React.cloneElement(button,cloneProps);
        });
        return (
            <p {...other} className={this.mergeClass("buttons-row",className)}>
                {buttons}
            </p>
        );
    }
   
}
