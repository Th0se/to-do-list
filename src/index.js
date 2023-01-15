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


const main = motherContainer();
document.body.appendChild(main);

bridge();