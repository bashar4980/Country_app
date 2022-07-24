import React, { useEffect, useState } from 'react'

const Search = ({searchData}) => {
    const [inputtext, setinputtext] = useState("")

 const userInput = e =>{
     setinputtext(e.target.value);

 }
 useEffect(()=>{
   searchData(inputtext)
 } , [inputtext])
  return (
    <div className='App-header'>
         <input type="text" placeholder='Please enter your country name' value={inputtext} onChange={userInput}></input>
    </div>
  )
}

export default Search