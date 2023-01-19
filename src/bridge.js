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

import rubbishBin from './delete.svg';

document.body.appendChild(motherContainer());

const bridge = () => {
    const motherCollection = [];

    const updateTasksByCollection = () => {
        const tasksByCollection = document.querySelector(`#tasksByCollection`);

        while (tasksByCollection.firstChild) {
            tasksByCollection.removeChild(tasksByCollection.firstChild);
        }

        for (let i in motherCollection) {
            const title = motherCollection[i].title;

            const deleteButton = document.createElement(`button`);
            const deleteButtonIcon = document.createElement(`img`);
            deleteButtonIcon.src = rubbishBin;
            deleteButtonIcon.setAttribute(`alt`, `Delete button, represented by an icon of rubbish bin`);
            deleteButtonIcon.classList.add(`deleteButtonIcon`);
            deleteButton.appendChild(deleteButtonIcon);

            const itemTitle = document.createElement(`p`);
            itemTitle.textContent = title;

            const item = document.createElement(`div`);
            item.classList.add(`collectionItem`);
            item.appendChild(itemTitle);
            item.appendChild(deleteButton);
            tasksByCollection.appendChild(item);
        };
    };

    const taskForm = document.querySelector(`#taskForm`);
    const task = document.querySelector(`#addTaskButton`);
    task.addEventListener(`click`, () => {
        taskForm.classList.add(`active`);
    });

    const taskConfirm = document.querySelector(`#taskFormConfirm`);
    taskConfirm.addEventListener(`click`, () => {
        const title = document.querySelector(`#title`).value;
        const dueDate = document.querySelector(`#deadline`).value;
        const description = document.querySelector(`#description`).value;
        const priority  = document.querySelector(`#priority`).value;
        const notes = document.querySelector(`#notes`).value;
        const collection = document.querySelector(`#collection`).value;

        const resultTask = record().task(title, dueDate, description, priority, notes, collection);
        
        const targetCollection = motherCollection.find(i => i.title === collection);

        if (!targetCollection) {
            console.log(`No such collection. Creating one.`);
            const resultCollection = record().collection(collection);
            resultCollection.tasks.push(resultTask);
            motherCollection.push(resultCollection);
            console.log(motherCollection);
        } else if (targetCollection) {
            console.log(`Collection found. Appending`);
            targetCollection.tasks.push(resultTask);
            console.log(motherCollection);
        };
        taskForm.classList.remove(`active`);
        updateTasksByCollection();
    });

    const collectionForm = document.querySelector(`#collectionForm`);
    const collectionButton = document.querySelector(`#addCollectionButton`);
    collectionButton.addEventListener(`click`, () => {
        collectionForm.classList.add(`active`);
    });

    const collectionConfirm = document.querySelector(`#collectionFormConfirm`);
    collectionConfirm.addEventListener(`click`, () => {
        const collection = document.querySelector(`#collectionFormInput`).value;

        const targetCollection = motherCollection.find((i) => {
            return i.title === collection;
        });

        if (targetCollection) {
            console.log(`Collection found, no new collection was created.`);
        } else if (!targetCollection) {
            console.log(`No such collection. Creating one.`);
            const resultCollection = record().collection(collection);
            motherCollection.push(resultCollection);
            console.log(motherCollection);
        };
        collectionForm.classList.remove(`active`);
        updateTasksByCollection();
    });
};

export {
    bridge,
};