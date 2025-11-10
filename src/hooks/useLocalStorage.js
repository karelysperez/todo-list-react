import {useState, useEffect, useRef} from 'react';

export function useLocalStorageTask() {
    const [task, setTask] = useState([]);
    const hasLoaded = useRef(false);

    useEffect(() =>{
        const raw = localStorage.getItem('tasks');
        const parsed = raw ? JSON.parse(raw) : [];

        const normalized = parsed.map(task => ({
            id: task.id ?? Math.random().toString(16).slice(2),
            name: task.name ?? "",
            description: task.description ?? "",
            status: task.status ?? "incomplete",
            selected: false
        }));

        setTask(normalized);
        hasLoaded.current = true;
    }, []);

    useEffect(() => {
        if(!hasLoaded.current) return;
        const toSave = task.map(({selected, ...rest}) => rest);
        localStorage.setItem('tasks', JSON.stringify(toSave));
    }, [task]);

    return [task, setTask];


}