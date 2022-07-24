import React from 'react'
import './App.css';

const Country = ({country, clickedName}) => {
    const {name , capital,population,flags}= country
  const ClickedHandeler= ()=>{
    // alert(`This Country name is ${name.common}`)
    clickedName(name.common)
  }
    
  return (
   <>
 
    <div className="card_item">
    <img src={flags.png} alt={name.common} />
    <h3>Name: { name.common}</h3>
   <h4>Population: {population}</h4>
    <h4>Capital: {capital}</h4>
    <h4>Area: {country.area}</h4>
    <button onClick={ClickedHandeler} className="btn">Remove</button>

    
   
   </div>
   </>
  )
}

export default Country