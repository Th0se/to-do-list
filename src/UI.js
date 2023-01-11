const addTask = () => {
    const container = document.createElement(`button`);
    container.setAttribute(`id`, `addTaskButton`);

    return container;
    // appended to add()
};

const addCollection = () => {
    const container = document.createElement(`button`);
    container.setAttribute(`id`, `addCollectionButton`);

    return container;
    // appended to add()
};

const add = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `addContainer`);

    const task = addTask();
    container.appendChild(task);

    const collection = addCollection();
    container.appendChild(collection);

    return container;
    // apended to sideBar()
};

const tasksByTime = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tasksByTime`);

    return container;
    // apended to sideBar()
};

const tasksByCollection = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tasksByCollection`);

    return container;
    // append to sideBar()
};

const sideBar = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `sideBar`);

    const create = add();
    container.appendChild(create);

    const timed = tasksByTime();
    container.appendChild(timed);

    const collected = tasksByCollection();
    container.appendChild(collected);

    return container;
    // appended to motherContainer()
};

const viewContent = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `viewContent`);

    return container;
    // appended to motherContainer()
};

const motherContainer = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, 'motherContainer');

    const nav = sideBar();
    container.appendChild(nav);

    const content = viewContent();
    container.appendChild(content);

    return container;
};

export {
    addTask,
    addCollection,
    add,
    tasksByTime,
    tasksByCollection,
    sideBar,
    viewContent,
    motherContainer,
};