/**
 * Created by liubo on 15/7/28.
 */

import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect } from 'react-router';


//视图
import App from './app.js';
import Home from './views/home/index.js';
import Tabs from './views/tabs/index.js';

const routes = (
    <Router>
        <Route component={App}>
            <Redirect from="/" to="/home" />
            <Route path="/home" name="home" component={Home} />
            <Route path="/tabs" name="tabs" component={Tabs} />
        </Route>
    </Router>
)


//自定义createElement方法
const createElement = (Component, props) => {
    return <Component {...props}/>
}

//Root
export default class Root extends Component {
    render =()=> {
       
        return (
            <div>
               <Router history={this.props.history} children={routes} createElement={createElement} />  
            </div>
        );
    }
}
Root.propTypes = {
    history: PropTypes.object.isRequired
};
