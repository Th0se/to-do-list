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
    task.textContent = `New task`;
    container.appendChild(task);

    const collection = addCollection();
    collection.textContent = `New collection`;
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

const taskForm = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `taskForm`);

    const form = document.createElement(`form`);
    form.classList.add(`taskForm`);
    container.appendChild(form);

    const fieldset1 = document.createElement(`fieldset`);
    fieldset1.classList.add(`fieldset`);
    form.appendChild(fieldset1);

    const fieldset1Label = document.createElement(`label`);
    fieldset1Label.classList.add(`formLabel`);
    fieldset1Label.textContent = `Title`;
    fieldset1.appendChild(fieldset1Label);

    const fieldset1Input = document.createElement(`input`);
    fieldset1Input.classList.add(`formInput`);
    fieldset1.appendChild(fieldset1Input);

    const fieldset2 = document.createElement(`fieldset`);
    fieldset2.classList.add(`fieldset`);
    form.appendChild(fieldset2);

    const fieldset2Label = document.createElement(`label`);
    fieldset2Label.classList.add(`Formabel`);
    fieldset2Label.textContent = `Due date`;
    fieldset2.appendChild(fieldset2Label);

    const fieldset2Input = document.createElement(`input`);
    fieldset2Input.classList.add(`formInput`);
    fieldset2Input.setAttribute(`type`, `date`);
    fieldset2.appendChild(fieldset2Input);

    const fieldset3 = document.createElement(`fieldset`);
    fieldset3.classList.add(`fieldset`);
    form.appendChild(fieldset3);

    const fieldset3Label = document.createElement(`label`);
    fieldset3Label.classList.add(`formLabel`);
    fieldset3.textContent = `Description`;
    fieldset3.appendChild(fieldset3Label);

    const fieldset3Input = document.createElement(`input`);
    fieldset3Input.classList.add(`formInput`);
    fieldset3.appendChild(fieldset3Input);

    const fieldset4 = document.createElement(`fieldset`);
    fieldset4.classList.add(`fieldset`);
    form.appendChild(fieldset4);

    const fieldset4Label = document.createElement(`label`);
    fieldset4Label.classList.add(`formLabel`);
    fieldset4Label.textContent = `Priority`;
    fieldset4.appendChild(fieldset4Label);

    const fieldset4Input = document.createElement(`input`);
    fieldset4Input.classList.add(`formInput`);
    fieldset4.appendChild(fieldset4Input);

    const fieldset5 = document.createElement(`fieldset`);
    fieldset5.classList.add(`fieldset`);
    form.appendChild(fieldset5);

    const fieldset5Label = document.createElement(`label`);
    fieldset5Label.classList.add(`formLabel`);
    fieldset5Label.textContent = `Notes`;
    fieldset5.appendChild(fieldset5Label);

    const fieldset5Input = document.createElement(`input`);
    fieldset5Input.classList.add(`formInput`);
    fieldset5.appendChild(fieldset5Input);

    const button = document.createElement(`button`);
    button.setAttribute(`id`, `taskFormConfirm`);
    button.textContent = `Add task`;
    form.appendChild(button);
    
    return container;
}

const motherContainer = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, 'motherContainer');

    const nav = sideBar();
    container.appendChild(nav);

    const content = viewContent();
    container.appendChild(content);

    const form = taskForm();
    container.appendChild(form);

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