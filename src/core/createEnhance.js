import React , { Component } from 'react';
import classNames from 'classnames';
/**
 * 组件增强器，动态添加功能
 */
export default function createEnhance(...utilsList){
    let utis = Array.from(utilsList);
    return function wrapWithEnhance(WrappedComponent){
        utis.forEach((util)=>{
            for(var k in util){
                if(k == "__esModule") continue;
                if(util.hasOwnProperty(k)){
                    WrappedComponent.prototype[k] = util[k];
                }
            }
        });
        return WrappedComponent;
    }
}
