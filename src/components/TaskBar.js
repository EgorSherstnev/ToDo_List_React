import React, {useState} from "react";

const TaskBar = ({onTaskSubmit}) => {
    const [task, setTask] = useState('');

    const onInputChange = (event) => {
        setTask(event.target.value);
    };

    const onAddTask = (event) => {
        event.preventDefault();
        onTaskSubmit(task);
       // console.log('добавил таску')
        setTask('');
        //console.log('очистил поле')
    };

    return (
        <div className="search-bar ui segment">
            
            <form  className="ui form">
                <div className="field">
                    <label>Добавить задачу</label>
                    <input 
                        type="text"
                        value={task}
                        onChange={onInputChange}
                    />
                    <button 
                        value="clickme"
                        onClick={onAddTask }
                    >
                        Добавить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskBar;