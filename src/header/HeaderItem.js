import React , { Component , PropTypes } from 'react';
import { css , pureRender } from '../enhance/index';
import Icon from '../Icon';
import createEnhance from '../core/createEnhance';
/**
 * NavItem 组件(导航栏子组件)
 * author:LGP
 */
@createEnhance(css,pureRender)
export default class HeaderItem extends Component{
    static propTypes = {
        link:PropTypes.bool,
        disabled:PropTypes.bool,
        position:PropTypes.string,
        ComponentClass:React.PropTypes.string
    };
    static defaultProps = {
        link:false,
        disabled:false,
        ComponentClass:"button"
    };
    
    render=()=>{
        let {
            className ,
            icon ,
            text ,
            position ,
            link ,
            disabled ,
            ComponentClass ,
            ...other 
        } = this.props; 

        const isLeft = position == "left" ;
      
        const classSet = {
            disabled,
            "button-link":link,
            "pull-left":isLeft,
            "pull-right":!isLeft
        }

        //图标组件
        const iconComponent = !icon ? null : (
            <Icon icon={icon} />
        );
      
        //拼装整体组件
        let  contentComponent ;
        ComponentClass = !ComponentClass ? "a":ComponentClass;
        
        return (
            <ComponentClass className={this.mergeClass("button button-nav", classSet,className)}>
                {iconComponent}
                {text}
            </ComponentClass>
        );
    }
}

