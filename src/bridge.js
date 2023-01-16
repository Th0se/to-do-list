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

document.body.appendChild(motherContainer());

const bridge = () => {
    const motherCollection = [];

    const form = document.querySelector(`#taskForm`);

    const task = document.querySelector(`#addTaskButton`);
    task.addEventListener(`click`, () => {
        form.classList.add(`active`);
    });

    const confirm = document.querySelector(`#taskFormConfirm`);
    confirm.addEventListener(`click`, () => {
        const title = document.querySelector(`#title`).value;
        const dueDate = document.querySelector(`#deadline`).value;
        const description = document.querySelector(`#description`).value;
        const priority  = document.querySelector(`#priority`).value;
        const notes = document.querySelector(`#notes`).value;
        const collection = document.querySelector(`#collection`).value;

        const resultTask = record().task(title, dueDate, description, priority, notes, collection);

        const targetCollection = motherCollection.find((i) => {
            i.title === collection;
        });

        if (!targetCollection) {
            console.log(`No such collection. Creating one.`);
            const resultCollection = record().collection(collection);
            resultCollection.tasks.push(resultTask);
            motherCollection.push(resultCollection);
        }
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