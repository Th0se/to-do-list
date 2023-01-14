const record = () => {
    const task = (title, dueDate, description, priority, notes) => {
        const record = {
            title: title,
            dueDate: dueDate,
            description: description,
            priority: priority,
            notes: notes,
            checklist: checklist,
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
        collection.record.push(task);
    };
};