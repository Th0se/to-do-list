const addTask = () => {
    const container = document.createElement(`button`);
    container.setAttribute(`id`, `addTaskButton`);
    container.classList.add(`newButton`);

    return container;
    // appended to add()
};

const addCollection = () => {
    const container = document.createElement(`button`);
    container.setAttribute(`id`, `addCollectionButton`);
    container.classList.add(`newButton`);

    return container;
    // appended to add()
};

const add = () => {
    const task = addTask();
    task.textContent = `New task`;

    const collection = addCollection();
    collection.textContent = `New collection`;

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `addContainer`);
    container.appendChild(task);
    container.appendChild(collection);
    
    return container;
    // appended to sideBar()
};

const tasksByTime = () => {
    const today = document.createElement(`button`);
    today.setAttribute(`id`, `sortToday`);
    today.textContent = `Today`;

    const tomorrow = document.createElement(`button`);
    tomorrow.setAttribute(`id`, `sortTomorrow`);
    tomorrow.textContent = `Tomorrow`;

    const nextWeek = document.createElement(`button`);
    nextWeek.setAttribute(`id`, `sortNextWeek`);
    nextWeek.textContent = `Next week`;

    const nextMonth = document.createElement(`button`);
    nextMonth.setAttribute(`id`, `sortNextMonth`);
    nextMonth.textContent = `Next month`;
    
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tasksByTime`);
    container.appendChild(today);
    container.appendChild(tomorrow);
    container.appendChild(nextWeek);
    container.appendChild(nextMonth);

    return container;
    // appended to sideBar()
};

const tasksByCollection = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tasksByCollection`);

    return container;
    // appended to sideBar()
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
    const fieldset1Label = document.createElement(`label`);
    fieldset1Label.classList.add(`formLabel`);
    fieldset1Label.textContent = `Title`;
    fieldset1Label.setAttribute(`for`, `title`);
    
    const fieldset1Input = document.createElement(`input`);
    fieldset1Input.classList.add(`formInput`);
    fieldset1Input.setAttribute(`id`, `title`);
    
    const fieldset1 = document.createElement(`fieldset`);
    fieldset1.classList.add(`fieldset`);
    fieldset1.appendChild(fieldset1Label);        
    fieldset1.appendChild(fieldset1Input);

    const fieldset2Label = document.createElement(`label`);
    fieldset2Label.classList.add(`Formabel`);
    fieldset2Label.textContent = `Due date`;
    fieldset2Label.setAttribute(`for`, `deadline`);

    const fieldset2Input = document.createElement(`input`);
    fieldset2Input.classList.add(`formInput`);
    fieldset2Input.setAttribute(`type`, `date`);
    fieldset2Input.setAttribute(`id`, `deadline`);

    const fieldset2 = document.createElement(`fieldset`);
    fieldset2.classList.add(`fieldset`);
    fieldset2.appendChild(fieldset2Label);
    fieldset2.appendChild(fieldset2Input);

    const fieldset3Label = document.createElement(`label`);
    fieldset3Label.classList.add(`formLabel`);
    fieldset3Label.textContent = `Description`;
    fieldset3Label.setAttribute(`for`, `description`);

    const fieldset3Input = document.createElement(`input`);
    fieldset3Input.classList.add(`formInput`);
    fieldset3Input.setAttribute(`id`, `description`);

    const fieldset3 = document.createElement(`fieldset`);
    fieldset3.classList.add(`fieldset`);
    fieldset3.appendChild(fieldset3Label);
    fieldset3.appendChild(fieldset3Input);

    const fieldset4Label = document.createElement(`label`);
    fieldset4Label.classList.add(`formLabel`);
    fieldset4Label.textContent = `Priority`;
    fieldset4Label.setAttribute(`for`, `priority`);
    
    const fieldset4Input = document.createElement(`input`);
    fieldset4Input.classList.add(`formInput`);
    fieldset4Input.setAttribute(`id`, `priority`);
    
    const fieldset4 = document.createElement(`fieldset`);
    fieldset4.classList.add(`fieldset`);
    fieldset4.appendChild(fieldset4Label);
    fieldset4.appendChild(fieldset4Input);

    const fieldset5Label = document.createElement(`label`);
    fieldset5Label.classList.add(`formLabel`);
    fieldset5Label.textContent = `Notes`;
    fieldset5Label.setAttribute(`for`, `notes`);

    const fieldset5Input = document.createElement(`input`);
    fieldset5Input.classList.add(`formInput`);
    fieldset5Input.setAttribute(`id`, `notes`);

    const fieldset5 = document.createElement(`fieldset`);
    fieldset5.classList.add(`fieldset`);
    fieldset5.appendChild(fieldset5Label);
    fieldset5.appendChild(fieldset5Input);

    const fieldset6Label = document.createElement(`label`);
    fieldset6Label.classList.add(`formLabel`);
    fieldset6Label.textContent = `Collection`;

    const fieldset6Input = document.createElement(`input`);
    fieldset6Input.classList.add(`formInput`);

    const fieldset6 = document.createElement(`fieldset`);
    fieldset6.classList.add(`fieldset`);
    fieldset6.appendChild(fieldset6Label);
    fieldset6.appendChild(fieldset6Input);

    const button = document.createElement(`button`);
    button.setAttribute(`id`, `taskFormConfirm`);
    button.textContent = `Add task`;
    
    const container = document.createElement(`form`);
    container.setAttribute(`id`, `taskForm`);
    container.appendChild(fieldset1);
    container.appendChild(fieldset2);
    container.appendChild(fieldset3);
    container.appendChild(fieldset4);
    container.appendChild(fieldset5);
    container.appendChild(fieldset6);
    container.appendChild(button);

    return container;
    // append to motherContainer()
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
    tasksByTime,
    tasksByCollection,
    sideBar,
    viewContent,
    taskForm,
    motherContainer,
};