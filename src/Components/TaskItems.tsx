import { Task,  } from "../interfaces/task.interface"  
import { IoCheckmarkDone, IoTrash } from "react-icons/io5";
import { useTask } from "../context/useTask";

interface Props {
    task: Task
}

function TaskItems ({ task }: Props) {

    const { deleteTask, updateTask} = useTask()

    return (
        <>
        <div key={Task._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg_gray-800 hover: cursor-pointer">
            <h1>{Task.title}</h1>
            <p>{Task.description}</p>
        </div>
        <div className="flex gap-x-2">
            <IoCheckmarkDone
            onClick={()=> {
                updateTask(Task._id, Task), {
                    done: !Task.done
                }
            }}
            >
                {Task.done ? 'undone': 'done'} 
            </IoCheckmarkDone>
            <IoTrash 
            onClick={ async () =>{
                if (!window.confirm('are you sure you want delete this task'))
                return await deleteTask(task._id);
            }}>Delete</IoTrash>
        </div>
        </>
    )
} 

export default TaskItems