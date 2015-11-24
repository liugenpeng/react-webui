import React , { Component , PropTypes } from 'react';
import { css , pureRender } from '../enhance/index';
import createEnhance from '../core/createEnhance';
import Swipeable from 'react-swipeable';
@createEnhance(css)
export default class Tab extends Component{
    static displayName = "Tab";
    static propTypes = {
       onDestroy: PropTypes.func,
    };
    componentWillUnmount=()=>{
        const { onDestroy } = this.props;
        onDestroy && onDestroy();
    }
    render=()=>{
        const {  
            title ,
            disabled , 
            active ,
            className, 
            children , 
            ...other
        } = this.props;
        /*let childs = React.Children.map(children,(item)=>{

            return (
                 <ReactGestures  onTap={::this.onSwipeLeft}>
                    { <div>{item}</div>}
                 </ReactGestures>
            );
        })  */
        
        return (
           
                <div {...other} className={this.mergeClass("tab",{active},className)}>
                    <div className="content-block">
                        <Swipeable 
                            onSwipedLeft={::this.handlerSwipedLeft}
                            onSwipedRight={::this.handlerSwipedRight}
                        >
                            <div>
                                 { children }
                            </div>
                        </Swipeable>
                       
                    </div>
                </div>
        );
    }
    handlerSwipedRight=(e,dis)=>{
        const { onSwipedRight } = this.props; 
        if(dis<=-50){
            onSwipedRight && onSwipedRight();
        }
    }
    handlerSwipedLeft=(e,dis)=>{
       const { onSwipedLeft } = this.props; 
       if(dis>=50){
            onSwipedLeft && onSwipedLeft();
       }
    }
}
