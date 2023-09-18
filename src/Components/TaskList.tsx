import TaskItems from "./TaskItems"
import { useTask,  } from "../context/useTask"

function TaskList (){
    const { tasks } = useTask();

    return (
        <>
        <div>
            {tasks.map((task) => (
                <TaskItems Task={task} key={task._id} />
            ))}         
        </div>
        </>
    )    
}
        
    


export default TaskList