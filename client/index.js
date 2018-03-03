import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './components/App';


// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then(resp => {
//     ReactDOM.render(
//         <App initialData={resp.data} />,
//         document.getElementById("root")
//     );
// });


ReactDOM.render(
    <App initialData={window.__initialData__} />,
    document.getElementById("root")
);
