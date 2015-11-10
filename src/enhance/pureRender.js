import shallowCompare from '../utils/shallowEqual';
export function shouldComponentUpdate(nextProps,nextState){
    return shallowCompare(this, nextProps, nextState)
}
