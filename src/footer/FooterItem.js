import React , { Component , PropTypes } from 'react';
import { css , pureRender } from '../enhance/index';
import Icon from '../Icon';
import createEnhance from '../core/createEnhance';
/**
 * FooterItem 组件(底部导航栏子组件)
 * author:LGP
 */
@createEnhance(css,pureRender)
export default class FooterItem extends Component{
    static propTypes = {
        active:PropTypes.bool,
        disabled:PropTypes.bool
    };
    static defaultProps = {
        active:false,
        disabled:false
    };
    
    render=()=>{
        let {
            className ,
            icon ,
            active,
            text ,
            disabled ,
            ...other 
        } = this.props; 

      
        const classSet = {
            disabled,
            active
        }
        //图标组件
        const iconComponent = !icon ? null : (
            <Icon icon={icon} />
        );
        //文本
        const textComponent = iconComponent ? (
            <span className="tab-label">
                {text}
            </span>
        ) : text;
        //拼装整体组件
        let  contentComponent ;
       
        return (
            <a className={this.mergeClass("tab-item", classSet,className)} href="javascript:;">
                {iconComponent}
                {textComponent}
            </a>
        );
    }
}

