import React,{useState,useEffect} from 'react';


import {Todo} from "../types"
// import { Result } from './components/result';

const []:Array<Todo> =[
  {text:"walking",completed:true},
  { text:"walked",completed:false},
  { text:"walkes",completed:true}
    ];

   interface Took{
 text:string;
 complete:Boolean;
   }
    
const Appyy:React.FC<{}>=()=> {
  const [text, settext] = useState<string | undefined>("people")
  // const [thodos, setthodos] = useState(InitialTodo)
  const [todos, settodos] = useState<Took[]>([])

useEffect(() => {
  console.log("effect don enter")
}, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settext(e.target.value)
  }

 const handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
 event.preventDefault();
//  alert(`${text}`)
addTodo(`${text}`)
 }
 const addTodo =(text:string):void=>{
   const newTodos: Took[]=[...todos,{text:text,complete:false}];
  settodos(newTodos)
 }

 
 console.log(todos)
    return (
 <React.Fragment>
 <form onSubmit={handleSubmit}>
 <input type="text" value={text} onChange={onChange}/>
 <button onClick={()=>settext("love")}>click me</button>
 <button onClick={()=>settext(undefined)}>reset</button>
 <button type="submit">submit</button> 
 </form>
 <section>
 {todos.map((todo:Took,key:number) => <div>{todo.text}</div>)}
 </section>
 </React.Fragment>
  )
}

export default Appyy;
