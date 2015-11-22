import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Button from '../src/Button';
describe('Button',()=>{
    it('should output an a',()=>{
        let instance = ReactTestUtils.renderIntoDocument( 
            <Button>
                我是个按钮
            </Button>
        );
        assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'A');
    });
    it('should output className button',()=>{
        let instance = ReactTestUtils.renderIntoDocument( 
            <Button>
                我是个按钮
            </Button>
        );
        assert.equal(ReactDOM.findDOMNode(instance).className, 'button wi-button');
    });
});
