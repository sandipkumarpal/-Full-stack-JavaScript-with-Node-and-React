import React from 'react';

import App from '../client/components/App';
import ReactDOMServer from 'react-dom/server';

const ReactHtml = ReactDOMServer.renderToString(<App/>);
export default () => {
    return ReactHtml;
}
console.log(ReactHtml);
