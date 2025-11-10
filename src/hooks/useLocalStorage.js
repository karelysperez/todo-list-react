import {useEffect, useState} from 'react';

export function useLocalStorageTask() {
    const [task, setTask] = useState(() => {
        // Initialize state from localStorage immediately
        try {
            const raw = localStorage.getItem('tasks');
            if (!raw) return [];
            
            const parsed = JSON.parse(raw);
            return parsed.map(task => ({
                id: task.id ?? Math.random().toString(16).slice(2),
                name: task.name ?? "",
                description: task.description ?? "",
                status: task.status ?? "incomplete",
                selected: false
            }));
        } catch (error) {
            console.error('Error loading tasks from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            const toSave = task.map(({selected, ...rest}) => rest);
            localStorage.setItem('tasks', JSON.stringify(toSave));
        } catch (error) {
            console.error('Error saving tasks to localStorage:', error);
        }
    }, [task]);

    return [task, setTask];
}