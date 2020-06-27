import React,{useContext} from 'react'
import {UserContext} from '../App'
import {Spinner} from '../layout/Spinner'
 import {Track} from './Track'


// interface Props {
//     title: string,
//     yes: Array<string>,
//     map: Function,
//     onValueChange: Function,
//   }
  
//   interface Item {
//     label: string,
//     value: string,
//     key: number | string,
//     color: string,
//   };
interface Props{

}
export const Searchbar: React.FC<Props> = () => {
    const yes = useContext(UserContext)
    console.log(yes)
    if (yes === undefined || yes ===0){
        return <Spinner />
    }else
    return (
        <React.Fragment>
             <h3 className='text-center mb-4'>TOP TRACKS</h3>
                  <div className='row'>
                  kk
             </div>
             </React.Fragment>
    )
}