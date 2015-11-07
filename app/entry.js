import { render } from 'react-dom';
import Root from './root.js';
import createBrowserHistory from 'history/lib/createHashHistory';
let history = createBrowserHistory();


/*document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/
render(
    <Root history={history} />,
    document.getElementById('container')
);
