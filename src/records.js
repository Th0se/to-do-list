const record = () => {
    const task = (title, dueDate, description, priority, notes, collection) => {
        const record = {
            title: title,
            dueDate: dueDate,
            description: description,
            priority: priority,
            notes: notes,
            collection: collection,
        }; 
    
        return {
            record: record
        };
    };
    const collection = (title) => {
        const record = {
            title: title,
            tasks: [],
        };
    
        return {
            record: record,
        };
    };
    const addToCollection = (collection, task) => {
        collection.tasks.push(task);
    };

    return {
        task,
        collection,
        addToCollection,
    };
};

export {
    record,
}