import './styles.css';

import {
    bridge,
} from './bridge.js';

import {
    addTask,
    addCollection,
    tasksByTime,
    tasksByCollection,
    sideBar,
    viewContent,
    taskForm,
    motherContainer,
} from './UI.js';

setInterval(() => {
    // refresh the UI every half a second.
}, 500);

bridge();