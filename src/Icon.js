import React , { Component } from 'react';
import { css,pureRender } from './enhance/index';
import createEnhance from './core/createEnhance'
/**
 * 图标组件
 */
@createEnhance(css,pureRender)
export default class Icon extends Component{
    static propTypes = {
      fontSize:React.PropTypes.string,
      color:React.PropTypes.string
    };
   
    render=()=>{
        const { fontSize , color , icon , ...other } = this.props;
        const iconClassName = "icon-"+icon;
        const iconStyle = {
            fontSize,
            color
        };
        return (
          <span  {...other} className={this.mergeClass("icon ",iconClassName)} ></span>
        );
    }
   
}
