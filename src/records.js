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
    
        return record;
    };
    const collection = (title) => {
        const record = {
            title: title,
            tasks: [],
        };
    
        return record;
    };

    return {
        task,
        collection,
    };
};

export {
    record,
};