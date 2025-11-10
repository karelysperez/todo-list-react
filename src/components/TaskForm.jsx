import {useState} from "react";

export default function TaskForm({onCreate}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if(!name.trim() || !description.trim()) return;

        console.log(
            "Creating task:",
            name,
            description
        );

        onCreate({name: name.trim(), description: description.trim()});

        setName("");
        setDescription("");
    }

    return (
        <form className = "task-form" onSubmit={handleSubmit}>
            <input
                className= "txtInput"
                placeholder= "Task Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className= "txtInput"
                placeholder= "Task Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type= "submit" className= "btn btn-success">Create</button>
        </form>
    )
}