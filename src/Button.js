import React , { Component , PropTypes } from 'react';
import { css,pureRender } from './enhance/index';
import createEnhance from './core/createEnhance'

@createEnhance(css,pureRender)
export default class Button extends Component{
    static displayName = "Button";
    static propTypes = {
        color:PropTypes.string,
        disabled:PropTypes.bool,
        fill:PropTypes.bool,
        big:PropTypes.bool,
        round:PropTypes.bool,
        active:PropTypes.bool
    };
    static get defaultProps(){
        return {
            disabled:false,
            fill:false,
            big:false,
            round:false,
            active:false,
            href:"javascript:;"
        }
    }
    _getColorClassName=(color)=>{
        return !color ? "":`button-${color}`;
    }
    render=()=>{
        const {   color , disabled , fill , 
            big , round , active , inline , href ,
            className, children , ...other
        } = this.props;
        
        let classesSet = {
            disabled,
            "button-fill":fill,
            "button-big":big,
            "button-round":round,
            active
        };
        let colorCls = this._getColorClassName(color);
       
        return (
            <a {...other} href={href} className={this.mergeClass("button wi-button",classesSet,colorCls,className)}>
                { children }
            </a>
        );
    }
   
}
