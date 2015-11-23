import React , { Component , PropTypes } from 'react';
import { css } from '../enhance/index';
import createEnhance from '../core/createEnhance';
import TabNav from './TabNav';
//获取默认的activeKey
function getDefaultActiveKey(props){
    let activeKey;
    
    React.Children.forEach(props.children, (child) => {
        if (!activeKey && !child.props.disabled) {
            activeKey = child.key;
        }
    });
    
    return activeKey;
}

@createEnhance(css)
export default class Tabs extends Component{
    constructor(props,context){
        super(props,context);
        let _activeKey ;
        let { activeKey , defaultActiveKey } = props;
        if(activeKey){
            _activeKey = activeKey
        }else if(defaultActiveKey){
             _activeKey = defaultActiveKey;
        }else{
             _activeKey = getDefaultActiveKey(props);
        }
       
        this.renderPanels = {};
        this.state ={
            activeKey:_activeKey
        };
    }
    componentWillReceiveProps=(nextProps)=>{
        let { activeKey:newActiveKey } = this.state;
        if ('activeKey' in nextProps) {
            newActiveKey = nextProps.activeKey;
        }
        let found;
        React.Children.forEach(nextProps.children, (child) => {
          if (child.key === newActiveKey) {
            found = true;
          }
        });
        if (found) {
          this.setActiveTab(newActiveKey);
        } else {
          this.setActiveTab(getDefaultActiveKey(nextProps));
        }
    }
    render=()=>{
        const {
            children
        } = this.props;
        const { activeKey } = this.state;

        let { tab } = this._getTabs(children);

        return (
            <div>
                <TabNav 
                key="tabnav"
                onTabClick={::this.onTabClick}
                panels={children}
                activeKey={activeKey} />
           
            <div className="content-block">
                <div className="tabs">
                    {tab}
                </div>
            </div>
            </div>
        );

    }
    onTabDestroy=()=>{
        this.renderPanels[key] = void 0;
    }
    onTabClick=(key)=>{
        const { onTabClick, onTabChange } = this.props; 
        const { activeKey } = this.state;
        onTabClick && onTabClick(key);
        if (activeKey !== key) {
            this.setActiveTab(key,onTabChange);
        }
    }
    //设置活动的tab
    setActiveTab=(newActiveKey,cb)=>{
        this.setState({
            activeKey:newActiveKey
        },()=>{
            setTimeout(()=>{
                 cb && cb();
            },0)
        });
    }
    _getTabs=(children)=>{
        const { props , state, renderPanels } = this;
        const { activeKey }= state;
        const tab = [] , tabNav = [];
        let active  ;
        //遍历子节点
        React.Children.forEach(children, (child,index) => {
           
            const { key , props}  = child;
            const { title } = props;
           
            active =  ( activeKey === key );
           

            if (active || renderPanels[key]) {
                child = active ? child : renderPanels[key];
                renderPanels[key] = React.cloneElement(child, {
                    active,
                    onDestroy: this.onTabDestroy.bind(this, key)
                });
                tab.push(renderPanels[key]);
            } else {
                //懒加载
                tab.push(React.cloneElement(child, {
                        active: false
                    }, [])
                );
            }
        });
        return {
            tab
        };     
    }
}
