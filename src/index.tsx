import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Hello from "./components/Hello";

ReactDOM.render(
    <Hello name="Chris Garland" enthusiasmLevel={7}/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();