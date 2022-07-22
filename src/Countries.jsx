import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const Countries = ({Countries}) => {
  return (
    <div className='card'>
        {Countries.map((country)=>{
            const newCountry ={country , id:uuidv4()}
           return <Country {...newCountry} key={newCountry.id}/>

          
        })}
       
   
    </div>
  )
}

export default Countries