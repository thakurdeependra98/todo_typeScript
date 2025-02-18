import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (inputValue.trim()) {
      const newTask: Task = { id: Date.now(), text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  

  return (
    <div>
      <div className="w-[70vw] h-screen flex items-center justify-start flex-col gap-[3vw] pt-20">
      <h1 className="text-[4vw] mb-10 font-thin tracking-widest text-zinc-700">Welcome to the <span className="font-semibold text-red-600 tracking-normal">TODO</span> App</h1>
      
     
      <form onSubmit={addTask} className="flex gap-[2vw]">
        <input
          className="py-1 border-2 px-5 rounded"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="bg-blue-500 px-6 py-2 rounded text-white" type="submit">
          Add Task
        </button>
      </form>

    
      <h2 className="text-[2vw] font-normal  text-red-700">
        Tasks ({tasks.filter((task) =>!task.completed).length})
      </h2>
      <ul className="w-full max-w-[300px] mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`border-2 border-gray-200 px-4 py-2 rounded-md mb-2 ${
              task.completed ? "text-gray-300 bg-gray-200" : ""
            }`}
          >
            {task.text}
            <MdDelete
              className="float-right cursor-pointer"
              onClick={() => setTasks(tasks.filter((t) => t.id!== task.id))}
            />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Todo;
