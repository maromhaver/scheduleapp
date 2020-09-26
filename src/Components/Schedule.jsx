import React,{useState} from 'react'


export default function Schedule(props) {

    const [showAddTask,setShowAddTask]=useState(0)
    const [oneTask,setOneTask]=useState('')
    const [taskDate,setTaskDate]=useState('')
    const [tasks,setTasks]=useState([])
    const [significance,setSignificance]=useState('')
    const [showEditDiv,setShowEditDiv]=useState(false)


    let addTask = (n,dl,s,i) =>{
        setTasks([...tasks,{taskName:n,deadLine:dl,significance:s,id:i}])

    }

    let clear = (i)=>{

        tasks.splice(i,1)
        setTasks([...tasks])

    }

    let show = () => {
        if(showAddTask===0){
            return( <div>
                <h3><button onClick={()=>{setShowAddTask(1)}}>Add New Task</button></h3>
            </div>)
        }
        if(showAddTask===1){
            return(<div>
                <span className="taskText">Task Name:  </span><input type="text" onChange={(e)=>{setOneTask(e.target.value)}}/><br/><br/>
                <span className="taskText">Dead Line:  </span><input type="date" onChange={(e)=>{setTaskDate(e.target.value)}}></input><br/>
                <p className="taskText" id="signi">Significance:</p>
                <input type="radio" className="radioCss" id="veryImportant" name="significance" value={"red"} onChange={(e)=>{setSignificance(e.target.value)}}/>
                <label for="red" className="radioCss" style={{color:"red"}}>Very Important</label>
                <input type="radio" className="radioCss" id="Important" name="significance" value={"rgb(190, 139, 71)"} onChange={(e)=>{setSignificance(e.target.value)}}/>
                <label for="rgb(190, 139, 71)" className="radioCss" style={{color:"rgb(190, 139, 71)"}}>Important</label>
                <input type="radio" className="radioCss" id="notThatImportant" name="significance" value={"green"} onChange={(e)=>{setSignificance(e.target.value)}}/>
                <label for="green" className="radioCss" style={{color:"green"}}>Not That Important</label><br/><br/><br/>
                <button className="taskText" onClick={()=>{setShowAddTask(2)
                    addTask(oneTask,taskDate,significance)
           }}>Add Task</button>


            </div>)}
    
        if(showAddTask===2){
            return(<div>
                <span>Task Has Been Added</span><br/>
                <button className="taskText" onClick={()=>{setShowAddTask(1)}}>Add Another Task</button>

            </div>)
        }}




        let showEdit = () =>{

            if (showEditDiv){
                return(<div>
                    <span className="taskTextEdit">Task Name:  </span><input type="text" onChange={(e)=>{setOneTask(e.target.value)}}/><br/><br/>
                    <span className="taskTextEdit">Dead Line:  </span><input type="date" onChange={(e)=>{setTaskDate(e.target.value)}}></input><br/>
                    <p className="taskTextEdit" id="signi">Significance:</p>
                    <input type="radio" className="radioCssEdit" id="veryImportant" name="significance" value={"red"} onChange={(e)=>{setSignificance(e.target.value)}}/>
                    <label for="red" className="radioCssEdit" style={{color:"orange"}}>Very Important</label><br/>
                    <input type="radio" className="radioCssEdit" id="Important" name="significance" value={"rgb(190, 139, 71)"} onChange={(e)=>{setSignificance(e.target.value)}}/>
                    <label for="rgb(190, 139, 71)" className="radioCssEdit" style={{color:"yellow"}}>Important</label><br/>
                    <input type="radio" className="radioCssEdit" id="notThatImportant" name="significance" value={"green"} onChange={(e)=>{setSignificance(e.target.value)}}/>
                    <label for="green" className="radioCssEdit" style={{color:"lightgreen"}}>Not That Important</label><br/><br/><br/>
                    <button className="taskTextEdit" onClick={()=>{setShowEditDiv(!showEditDiv)          
                    
                    }}>Edit Task</button>
    
    
                </div>)}
        }


    return (
        <div>
            <h2> Hi, {props.user}</h2>
            <div>{show()}</div><br/><br/><br/>
            <div>{tasks.map((val,index)=>{return(<span style={{backgroundColor:val.significance}} className="tasks">
                                                

                                                    <p>{val.taskName}</p>
                                                    <p>Dead Line:  {val.deadLine}</p>
                                                    <p className="editButton" onClick={()=>{setShowEditDiv(!showEditDiv)}}>Edit</p>
                                                    <button onClick={()=>{clear(index)}}>Clear</button>
                                                    {showEdit()}

                                            </span>)})}   
            </div>
            

        </div>
    )
}
