import React , { Component } from 'react';
import { css,pureRender } from './enhance/index';
import createEnhance from './core/createEnhance'

/**
 * Image 组件
 * author:LGP
 */
@createEnhance(css,pureRender)
export default class Image extends Component{
    static propTypes= {
        src:React.PropTypes.string,
        responsive: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        circle: React.PropTypes.bool,
        thumbnail: React.PropTypes.bool
    };
    static defaultProps = {
        responsive: false, // 是否自适应
        rounded: false,    // 方形
        circle: false,     // 原型
        thumbnail: false   // 缩略图   
    };
   
    render=()=>{
        const {
            responsive , rounded , circle , 
            thumbnail , className , 
            ...other 
        } = this.props; 
        const classes = {
            'img-responsive': responsive,
            'img-rounded': rounded,
            'img-circle':circle,
            'img-thumbnail': thumbnail
        };
        return (
            <img  className={this.mergeClass(className, classes)} {...other} />
        );
    }
}

