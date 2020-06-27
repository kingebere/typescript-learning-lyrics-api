import React,{useState,useEffect,useContext} from 'react'
import axios from"axios"
import {UserContext} from '../App'


export const Searchz: React.FC<{}> = () => {
    const [text, settext] = useState<string>()
 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        settext(e.target.value)
      }

    const FindTrack =(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
    

    useEffect(() => {
        axios.get('https://api.musixmatch&apikey=${process.env.REACT_APP_APIKEY}')
    }, [])}
    const yep = useContext(UserContext)
    console.log(yep)
    return (
        <form onSubmit={FindTrack}>
        <input type="text" value ={text} onChange={onChange}/>
        <button type='submit'>submit</button>
        </form>
    )
}
// REACT_APP_MM_KEY=e36de2ef22677dbdd6a3d2aedef96eb9