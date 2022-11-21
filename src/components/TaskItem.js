import React from "react";

const TaskItem = ({task, deleteTask, id}) => {

    return (
        <div className="item">
            <div className="right floated content">
                <button  
                    className="ui button" 
                    onClick={() => {deleteTask(id)}}
                >
                    Удалить Задачу
                </button>
            </div>
            <div className="content">
                {task}
            </div>
        </div>
    );
};

export default TaskItem;