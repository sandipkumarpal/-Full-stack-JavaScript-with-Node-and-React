import React from 'react';
import axios from 'axios';
import App from '../client/components/App';
import ReactDOMServer from 'react-dom/server';

// const ReactHtml = ReactDOMServer.renderToString(<App/>);
export default () => {
    // return ReactHtml;
    return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resp => {
            return {
                markup: ReactDOMServer.renderToString(
                    <App initialData={resp.data} />
                ),
                data: resp.data
            }
    })
};
// console.log(ReactHtml);
