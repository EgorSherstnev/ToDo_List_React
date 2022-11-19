import React, {useState} from "react";

const TaskBar = () => {
    const [task, setTask] = useState('');

    const onInputChange = (event) => {
        setTask(event.target.value);
        console.log('setTask пришло')
    };

    return (
        <div className="search-bar ui segment">
            
            <form className="ui form">
                <div className="field">
                    <label>Добавить задачу</label>
                    <input 
                        type="text"
                        value={task}
                        onChange={onInputChange}
                    />
                    <button 
                        //onClick={}
                    >
                        Добавить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskBar;