import TaskRow from "./TaskRow.jsx";

export default function TaskTable({ tasks, onToggleSelected}) {
    return (
        <div className="tableContainer">
            <table className="taskTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Select</th>
                </tr>
                </thead>

                <tbody>
                    {tasks.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="muted">No tasks found</td>
                        </tr>
                    ) : (
                        tasks.map((task, index) => (
                            <TaskRow
                                key={task.id}
                                task={task}
                                index={index}
                                onToggleSelected={onToggleSelected}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}