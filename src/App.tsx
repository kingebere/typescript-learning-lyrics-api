import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import  {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { Searchbar } from './components/Searchbar';
import { Searchz } from './components/Searchz';
import { Navbar } from './layout/Navbar';

export const  UserContext = React.createContext({})

// type Actions = | {type:"SEARCH_TRACKS";
// track_name:string;
// completed:boolean;
// heading:string;
// }
// const reducer = (state =Tracks, action:Actions) => {
//     switch (action.type) {
//         case 'SEARCH_TRACKS':
//             return {...state,track_name:action.track_name,
//                 completed:action.completed,
//                 heading:'Search Results'}
               
//         default:
//             return state
//     }
// }


// const []:Array<Todo> =[
//   {text:"walking",completed:true},
//   { text:"walked",completed:false},
//   { text:"walkes",completed:true}
//     ];

//    interface Took{
//  text:string;
//  complete:Boolean;
//    }
    

interface track_list{
  track:Object;
}


 const Tracks:Array<track_list> =[];

 const App: React.FC<{}> = () => {
 const [data, setdata] = useState(Tracks)
// const [state, dispatch] = useReducer(reducer, Tracks)
    
useEffect(() => {
        axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=e36de2ef22677dbdd6a3d2aedef96eb9`)
            
          .then(res =>{console.log(res.data)
            setdata(
         res.data.message.body.track_list
               
            )
         })
          .catch(err => console.error(err))}, [])
  
    return (
        
          <div>
         <UserContext.Provider value={data}>
        <Navbar/>
         <Searchz/>
         <Searchbar/>
         </UserContext.Provider>
          </div>
    )
}

export default App;