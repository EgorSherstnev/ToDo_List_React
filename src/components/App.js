import React, {useState} from "react";
import TaskBar from "./TaskBar";
import TaskList from "./TasksList";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const onTaskSubmit = (task) => {
        setTasks([...tasks,task ]);
        //console.log(tasks);
    };

    const deleteTask = (taskIndex) => {
        //console.log('Удалил задачу №' + taskIndex);
        const delTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(delTasks);
    };

    return(
        <div>
            
            <div>
                <TaskBar onTaskSubmit={onTaskSubmit} />
            </div>
            <div>
                <TaskList 
                    tasks={tasks}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default App;