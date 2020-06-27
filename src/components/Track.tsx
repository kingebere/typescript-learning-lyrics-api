import React from 'react'


interface Props{


}
export const Track: React.FC<Props> = () => {
    return (
         <div className='col-md-6'>
           <div className='card mb-4 shadow-sm'>
          <div  className='card-body'>
         <h5> </h5>
         <p className='card-text'>
             <strong>
                 Track 
             </strong>
             :
             <br/>
             <strong>
                 Album 
             </strong>
             :
             
         </p>
     

          </div>
           </div> 
        </div>
    )
}