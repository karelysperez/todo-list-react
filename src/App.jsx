import { useMemo, useState} from 'react'
import {useLocalStorageTask} from "./hooks/useLocalStorage.js";
import Header from "./components/Header.jsx";
import TaskTable from "./components/TaskTable.jsx";
import TaskForm from "./components/TaskForm.jsx";
import ActionBar from "./components/ActionBar.jsx";
import './index.css'

function uid() {
    return Math.random().toString(16).slice(2);
}

export default function App() {
  const [tasks, setTask] = useLocalStorageTask();
  const [showForm, setShowForm] = useState(false);

  const anySelected = useMemo(() => tasks.some(task => task.selected), [tasks]);

  const toggleForm = () => setShowForm(showForm => !showForm);

  const handleCreate = ({name, description}) => {
    setTask(prev => [
      ...prev,
      {
        id: uid(),
        name,
        description,
        status: "incomplete",
        selected: false
      }
    ]);
  };

  const setSelected = (id, selected) => {
      setTask(prev => prev.map(task => task.id === id ? {...task, selected} : task));
  };

  const completeSelected = () => {
      if(!anySelected) return;
      setTask(prev => prev.map(task => task.selected ? {...task, status: "completed"} : task));
  };

  const incompleteSelected = () => {
      if(!anySelected) return;
      setTask(prev => prev.map(task => task.selected ? {...task, status: "incomplete"} : task));
  }

  const deleteSelected = () => {
      if(!anySelected) return;
      const n = tasks.filter(task => task.selected).length;
      const ok = window.confirm(`Delete ${n} task? This action cannot be undone.`);
      if(!ok) return;
      setTask(prev => prev.filter(task => !task.selected));
  }
  return (
      <div className="page">
          <Header showForm={showForm} onToggleForm={toggleForm}/>

          {showForm && <TaskForm onCreate={handleCreate}/>}

          <TaskTable tasks={tasks} onToggleSelected={setSelected}/>

          <ActionBar
          anySelected={anySelected}
          onDeleteSelected={deleteSelected}
          onCompleteSelected={completeSelected}
          onIncompleteSelected={incompleteSelected}
          />
      </div>

  );
}


