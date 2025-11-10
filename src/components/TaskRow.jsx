import {memo} from 'react'

function TaskRow({ task, index, onToggleSelected}) {
    return (
        <tr className={`row ${index % 2 === 1 ? "zebra" : ""}`}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>
                <span className={`badge ${task.status === "completed" ? "ok" : "warn"}`}>
                    {task.status === "completed" ? "Completed" : "Incomplete"}
                </span>
            </td>
            <td>
                <input
                type="checkbox"
                checked={task.selected || false}
                onChange={event => onToggleSelected(task.id, event.target.checked)}
                />
            </td>
        </tr>
    );
}

export default memo(TaskRow);