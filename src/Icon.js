import React , { Component } from 'react';
import { pureRender } from './enhance/index';
import createEnhance from './core/createEnhance'
/**
 * 图标组件
 */
@createEnhance(pureRender)
export default class Icon extends Component{
    static propTypes = {
      fontSize:React.PropTypes.string,
      color:React.PropTypes.string
    };
    static defaultProps = {
        fontSize:"12"
        color:'#FFFFFF'
    };
    render=()=>{
        const { fontSize , color , icon , ...other } = this.props;
        const iconStyle = {
            fontSize,
            color
        };
        return (
          <i  {...other} className=`icon ${icon}` style={iconStyle}></i>
        );
    }
   
}
