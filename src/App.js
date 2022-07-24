import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './Countries';
import Search from './Search';

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [country, setCountry]= useState([]);
  const [isLoading , setIsloading] = useState(true);
  const [error , setError]= useState(null);

  useEffect(()=>{
     fetch(url)
     .then(res=>{
      if(res.ok){
        return res.json()
      }
    
        throw res
      
     })
     .then(data=>{
      setCountry(data)
     
     })
     .catch(error=>{
      setError(error)
     })
     .finally(()=>{
      setIsloading(false)
     })
  },[])
  // if(isLoading) return "loading....";
  // if(error) return "Error!"
  const clickedName = commonName =>{
    setCountry(country.filter((country)=> country.name.common !== commonName))
  }
  const searchData = searchName =>{
    const searchValue = searchName.toLowerCase();
    const newCountries = country.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(searchValue)
    })
   setCountry(newCountries)
   
  }
  return (
    <div className="container">
     <h1>Country App</h1>
    <Search searchData={searchData}/>
     {isLoading  && <h3>Loading......</h3>}
     {error && <h3>{error.message}</h3>}
    {country && <Countries Countries={country} clickedName ={clickedName}/> }
    </div>
  );
}

export default App;
