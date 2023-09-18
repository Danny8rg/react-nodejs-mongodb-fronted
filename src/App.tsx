import TaskList from "./Components/TaskList"
import TaskForm from "./Components/TaskForm"
import { TaskProvider } from "./context/TaskContext"

function App(){

  return(
    <div className="bg-zinc-900 text-white flex items-center justify-center">hello world
    <div className="bg-zinc-950 p-4 w-2/5">
    <h1 className="text-3xl font-bold text-center block my-2"> Task App</h1>
    </div>
    <TaskProvider >
    <TaskForm />
    <TaskList /> 
    </TaskProvider>


    </div>
  )
}

export default App