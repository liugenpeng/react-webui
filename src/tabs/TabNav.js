import React , { Component , PropTypes } from 'react';
import { css , pureRender } from '../enhance/index';
import createEnhance from '../core/createEnhance';
import Button from '../Button';
@createEnhance(css)
export default class TabNav extends Component{
    static displayName = "TabNav";
    static propTypes = {
       onTabClick: PropTypes.func
    };
    onTabClick=(key)=>{
        const { onTabClick ,disabled } = this.props; 
        
        onTabClick && onTabClick(key);
    }
    getNavs=(children)=>{
        const { panels, activeKey } = this.props;   
        const rst = [];
        React.Children.forEach(panels, (child,index)=> {
            const { key , props } = child;
            const { disabled , title } = props;
          
            let events = {} , conf = {} ;
            if(!disabled){
                events = {
                    onClick: this.onTabClick.bind(this, key),
                };
            }
            
        
            if (activeKey == key) {
                conf = {
                    ref:'activeTab',
                    cls:'active'
                };
            }

            let  cls = activeKey == key ? "active" : "";    
            rst.push(
                <Button {...events}  disabled={child.props.disabled} wrap={false} active={activeKey === key}
                    className={this.mergeClass("tab-link",conf.cls)}  key={key}
                    {...conf}>
                    {child.props.title}
                </Button>
            );
        });

        return rst;
    }
    render=()=>{
        const {    
            className, 
            children , 
            ...other
        } = this.props;
        
        let tabNavs = this.getNavs(children);
        
        return (
            <div className={this.mergeClass("buttons-tab",className)}>
                { tabNavs }
            </div>
        );
    }
   
}
