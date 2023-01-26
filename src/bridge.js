import {
    record,
} from './records.js';

import {
    addTask,
    addCollection,
    tasksByCollection,
    sideBar,
    viewContent,
    taskForm,
    motherContainer,
} from './UI.js';

import rubbishBin from './delete.svg';

document.body.appendChild(motherContainer());

const bridge = () => {
    let motherCollection = [];

    if (localStorage.getItem(`motherCollection`)) {
        motherCollection = JSON.parse(localStorage.getItem(`motherCollection`));
    } else {
        motherCollection = [];
        localStorage.setItem(`motherCollection`, JSON.stringify(motherCollection));
    };

    const viewContent = document.querySelector(`#viewContent`);

    const updateMotherCollection = () => {
        localStorage.setItem(`motherCollection`, JSON.stringify(motherCollection));
    };

    const updateTasksByCollection = () => {
        const tasksByCollection = document.querySelector(`#tasksByCollection`);

        while (tasksByCollection.firstChild) {
            tasksByCollection.removeChild(tasksByCollection.firstChild);
        };

        for (let element of motherCollection) {
            const title = element.title;
        
            const deleteButton = document.createElement(`button`);
            const deleteButtonIcon = document.createElement(`img`);
            deleteButtonIcon.src = rubbishBin;
            deleteButtonIcon.setAttribute(`alt`, `Delete button, represented by an icon of rubbish bin`);
            deleteButtonIcon.classList.add(`deleteButtonIcon`);
            deleteButton.appendChild(deleteButtonIcon);
            deleteButton.addEventListener(`click`, () => {
                const index = motherCollection.indexOf(element);
                motherCollection.splice(index, 1);
                updateMotherCollection();
                updateTasksByCollection();
            });
        
            const itemTitle = document.createElement(`div`);
            itemTitle.textContent = title;
            itemTitle.addEventListener(`click`, () => {
                while (viewContent.firstChild) {
                    viewContent.removeChild(viewContent.firstChild);
                };
                displayCollection(element);
            });
        
            const item = document.createElement(`div`);
            item.classList.add(`collectionItem`);
            item.appendChild(itemTitle);
            item.appendChild(deleteButton);
            
            tasksByCollection.appendChild(item);
        };
    };

    const displayCollection = (collection) => {    
        const displayTitle = document.createElement(`div`);
        displayTitle.textcontent = collection.title;
        displayTitle.classList.add(`displayTitle`);
        viewContent.appendChild(displayTitle);

        const displayItem = (item) => {
            const displayTasks = (text, task) => {
                const label = document.createElement(`div`);
                label.classList = `displayTaskLabel`;
                label.textContent = text;

                const value = document.createElement(`div`);
                value.classList = `displayTaskValue`;
                value.textContent = task;

                const container = document.createElement(`div`);
                container.classList = `displayTaskContainer`;
                container.appendChild(label);
                container.appendChild(value);

                return container;
            };

            const title = document.createElement(`div`);
            title.textContent = item.title;
            title.addEventListener(`click`, () => {
                while (viewContent.firstChild) {
                    viewContent.removeChild(viewContent.firstChild);
                };
                viewContent.appendChild(displayTasks(`Title`, item.title));
                viewContent.appendChild(displayTasks(`Due`, item.dueDate));
                viewContent.appendChild(displayTasks(`Description`, item.description));
                viewContent.appendChild(displayTasks(`Notes`, item.notes));
                viewContent.appendChild(displayTasks(`Priority`, item.priority));
            });

            const deleteButton = document.createElement(`button`);
            const deleteButtonIcon = document.createElement(`img`);
            deleteButtonIcon.src = rubbishBin;
            deleteButtonIcon.setAttribute(`alt`, `Delete button, represented by an icon of rubbish bin`);
            deleteButtonIcon.classList.add(`deleteButtonIcon`);
            deleteButton.appendChild(deleteButtonIcon);
            deleteButton.addEventListener(`click`, () => {
                const index = collection.tasks.indexOf(item);
                collection.tasks.splice(index, 1);
                updateMotherCollection();
                console.log(`Item deleted. Please refresh the page to see the updated list.`);
                viewContent.removeChild(container);
            });

            const container = document.createElement(`div`);
            container.classList.add(`displayItem`);
            container.appendChild(title);
            container.appendChild(deleteButton);

            return container;
        };
        
        for (let i of collection.tasks) {
            const result = displayItem(i);
            viewContent.appendChild(result);
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
        } else if (targetCollection) {
            console.log(`Collection found. Appending`);
            targetCollection.tasks.push(resultTask);        
        };
        taskForm.classList.remove(`active`);
        updateTasksByCollection();
        updateMotherCollection();
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
        updateMotherCollection();
    });
    updateTasksByCollection();
};

export {
    bridge,
};