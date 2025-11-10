export default function Header({ showForm, onToggleForm}) {
    return (
        <header className="header">

            <h1>Task Manager</h1>
            <button className = "btn btn-primary" onClick={onToggleForm}>
                {showForm ? "Close Form" : "Add Task"}
            </button>

        </header>
    );
}