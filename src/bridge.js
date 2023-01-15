import {
    record,
} from './records.js';

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

const bridge = () => {
    const motherCollection = [];

    const form = document.querySelector(`#taskForm`);

    const task = document.querySelector(`#addTaskButton`);
    task.addEventListener(`click`, () => {
        form.classList.add(`active`);
    });

    return {
        motherCollection,
        form,
        task,
    };
};

export {
    bridge,
};