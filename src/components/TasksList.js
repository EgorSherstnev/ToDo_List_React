import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks, deleteTask}) => {
    const renderList = tasks.map((task, index) => {
        return (
            <TaskItem 
                key={index.toString()}
                id={index}
                deleteTask={deleteTask}
                task={task}
            />
        )
    })

    return (
        <div className="ui middle aligned divided list">
            {renderList}
        </div>)
};

export default TaskList;